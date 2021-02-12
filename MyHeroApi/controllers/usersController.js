require('dotenv').config();
const { con } = require('../db');
const utils = require('../utils');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { result } = require('lodash');

// SignUp
module.exports.signUp = (req, res, next) => {
	const pseudo = req.body.pseudo;
	const email = req.body.email;
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(req.body.password, salt);
	const password = hash;

	let sql = `INSERT INTO users(pseudo, email, password) VALUES(?, ?, ?)`;

	con.query(sql, [pseudo, email, password], function (err, result) {
		return res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
				insertId: result.insertId,
			},
		});
	});
};

// Login
module.exports.login = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	let query = `SELECT * FROM users WHERE email=?`;
	con.query(query, [email], (err, result, fields) => {
		if (err) {
			return next(err);
		}

		if (result.length > 0) {
			const user = result[0];

			bcrypt.compare(password, user.password, (err, isMatched) => {
				if (isMatched === true) {
					var userData = {
						id: user.id,
						email: user.email,
						first_name: user.first_name,
						last_name: user.last_name,
					};
					return res.json({
						user: userData
					});
				} else {
					let err = new Error('Invalid email or password entered');
					err.field = 'token';
					return next(err);
				}
			});
		} else {
			let err = new Error('Invalid email or password entered');
			err.field = 'token';
			return next(err);
		}
	});
};

// Get Logged in user
module.exports.getLoggedInUser = (req, res, next) => {
	var token = req.headers.authorization;
	if (token) {
		// verifies secret and checks if the token is expired
		jwt.verify(
			token.replace(/^Bearer\s/, ''),
			process.env.AUTH_SECRET,
			(err, decoded) => {
				if (err) {
					let err = new Error('Unauthorized');
					err.field = 'login';
					return next(err);
				} else {
					return res.json({ status: 'success', user: decoded });
				}
			}
		);
	} else {
		let err = new Error('Unauthorized');
		err.field = 'login';
		return next(err);
	}
};

// Update Profile
module.exports.updateProfile = (req, res, next) => {
	var id = req.user.id;
	if (id) {
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var email = req.body.email;

		let query = `UPDATE users SET first_name=?, last_name=?, email=?, date_updated=NOW() WHERE id=?`;
		con.query(
			query,
			[first_name, last_name, email, id],
			(err, result, fields) => {
				if (err) {
					return next(err);
				}

				return res.json({
					status: 'success',
					result: result,
				});
			}
		);
	} else {
		let err = new Error('User id not found');
		err.field = 'id';
		return next(err);
	}
};

// Change Password
module.exports.changePassword = (req, res, next) => {
	var id = req.user.id;
	if (id) {
		// encrypt password
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.new_password, salt);
		const new_password = hash;

		let query = `UPDATE users 
									SET password=?, date_updated=NOW() 
									WHERE id=?`;
		con.query(query, [new_password, id], (err, result, fields) => {
			if (err) {
				return next(err);
			}

			return res.json({
				status: 'success',
				result: result,
			});
		});
	} else {
		let err = new Error('User id not found');
		err.field = 'id';
		return next(err);
	}
};

// Forgot Password
module.exports.forgotPassword = (req, res, next) => {
	var email = req.body.email;
	var token = crypto.randomBytes(16).toString('hex');

	let query = `UPDATE users 
									SET token=?, date_updated=NOW() 
									WHERE email=?`;
	con.query(query, [token, email], (err, result, fields) => {
		if (err) {
			return next(err);
		}

		// Send the email
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'appmyheroes@gmail.com',
				pass: 'Saidat74100',
			},
		});

		var verificationLink = `${process.env.CLIENT_URL}/forgot-password-verify/?token=${token}`;

		var mailOptions = {
			from: 'appmyheroes@gmail.com',
			to: email,
			subject: 'Reset password',
			html: `Hi there! <br/><br/>
			Please click on the link below to reset your password:<br/>
			<a href="${verificationLink}" target="_blank">${verificationLink}</a><br/><br/>
			Thank You.`,
		};
		transporter.sendMail(mailOptions, (err) => {
			if (err) {
				return next(err);
			}
			return res.json({
				status: 'success',
				result: result,
			});
		});
	});
};

// add commentaire / rate
module.exports.addRate = (req, res, next) => {
	const source = req.body.source;
	const user = req.body.user;
	const rate = req.body.rate;
	const description = req.body.description;
	
	let sql = `INSERT INTO users_data(source, user, rate, description) VALUES(?, ?, ?, ?)`;

	con.query(sql, [source, user, rate, description], function (err, result) {
		return res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
				insertId: result.insertId,
			},
		});
	});
};

// Forgot Password Verify Link
module.exports.forgotPasswordVerify = (req, res, next) => {
	var token = req.params.token;

	if (token) {
		let query = `SELECT * FROM users WHERE token=?`;
		con.query(query, [token], (err, result, fields) => {
			if (err) {
				return next(err);
			}

			if (result.length > 0) {
				return res.json({
					message: 'Validation link passed',
					type: 'success',
				});
			} else {
				let err = new Error('Invalid token provided');
				err.field = 'token';
				return next(err);
			}
		});
	} else {
		let err = new Error('Token not available');
		err.field = 'token';
		return next(err);
	}
};

// Reset Password
module.exports.resetPassword = (req, res, next) => {
	var token = req.body.token;
	if (token) {
		// encrypt password
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.new_password, salt);
		const new_password = hash;

		let query = `UPDATE users 
									SET password=?, token='', date_updated=NOW() 
									WHERE token=?`;
		con.query(query, [new_password, token], (err, result, fields) => {
			if (err) {
				return next(err);
			}

			return res.json({
				status: 'success',
				result: result,
			});
		});
	} else {
		let err = new Error('Token not available');
		err.field = 'token';
		return next(err);
	}
};


module.exports.uploadAvatar = (req, res, next) => {
	console.log('file', req.files)
	console.log('body', req.body)

	res.status(200).json({
	  message: 'success!',
	})
}

module.exports.getUserData = (req, res, next) => {
	const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
	const mail = req.query.mail;
	let query;

	if (expressionReguliere.test(mail)) {
		query = `SELECT * FROM users WHERE email=?`;
	} else { 
		query = `SELECT * FROM users WHERE pseudo=?`;
	}

	con.query(query, [mail], (err, result, fields) => {
		if (err) {
			return next(err);
		}

		if (result.length > 0) {
			const user = result;
			console.log(user)
			res.status(200).json(user);
		} else {
			let err = new Error('Invalid ID');
			err.field = 'token';
			return next(err);
		}
	});
}

module.exports.updatePassword = (req, res, next) => {
	let mail = req.body.mail;
	let new_password = req.body.password;
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(new_password, salt);
	let query = `UPDATE users SET password=?, date_updated=NOW() WHERE email=?`;

	con.query(query, [hash, mail], (err, result, fields) => {
		if (err) {
			return next(err);
		}

		return res.json({
			status: 'success',
			result: result,
		});
	});
}


module.exports.updatePseudo = (req, res, next) => {
	let mail = req.body.mail;
	let new_pseudo = req.body.pseudo;
	let query = `UPDATE users SET pseudo=?, date_updated=NOW() WHERE email=?`;

	con.query(query, [new_pseudo, mail], (err, result, fields) => {
		if (err) {
			return next(err);
		}

		return res.json({
			status: 'success',
			result: result,
		});
	});
}

module.exports.returnRateUser = (req, res, next) => {
	const user = req.query.user;
	const query = `SELECT * FROM users_data WHERE source=?`

	con.query(query, [user], (err, result, fields) => {
		res.status(200).json(result);
	})
}

module.exports.addXp = (req, res, next) => {
	const users = req.query.users;

	users.map((v, k) => {
		const query = `SELECT xp FROM users WHERE pseudo=?`

		con.query(query, [v], (err, result, fields) => {
			let oldXp = result;
			let query2 = `UPDATE users SET xp=? WHERE pseudo=?`;

			con.query(query2, [oldXp + 10, v], (err, result, fields) => {		
				return res.json({
					status: 'success',
					result: result,
				});
			});
		})
	})
}

const ss = () => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'appmyheroes@gmail.com',
			pass: 'Saidat74100',
		},
	});

	var mailOptions = {
		from: 'appmyheroes@gmail.com',
		to: 'zou.hoyame@gmail.com',
		subject: 'Reset password',
		html: `Hi there! <br/><br/>
		Please click on the link below to reset your password:<br/>
		Thank You.`,
	};
	transporter.sendMail(mailOptions, (err) => {
		if (err) {
			console.log(err);
		}
	});
}

setInterval(() => { 
	console.log(`[MyHeroApi] : Refresh`)
	let query = `SELECT a FROM refresh`;
	con.query(query, [], (err, result, fields) => {});
}, 100000);

