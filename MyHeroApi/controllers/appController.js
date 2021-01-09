const { con } = require('../db');

module.exports.addRate = (req, res, next) => {
	const source = req.body.source;
	const description = req.body.description;
	const rate = req.body.rate;

	const sql = `INSERT INTO rate(source, description, rate) VALUES(?, ?, ?)`;

	con.query(sql, [source, description, rate], function (err, result) {
		return res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
				insertId: result.insertId,
			},
		});
	});
}

module.exports.addFaq = (req, res, next) => {
	const source = req.body.source;
	const content = req.body.content;

	const sql = `INSERT INTO faq(source, content) VALUES(?, ?)`;

	con.query(sql, [source, content], function(err, result) {
		return res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
				insertId: result.insertId,
			},
		});
	})
}