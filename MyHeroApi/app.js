require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const alertController = require('./controllers/alertController');
const admin = require('firebase-admin');

var serviceAccount = require("./inlaid-chiller-308723-firebase-adminsdk-qunjm-507156978d.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://myhero-291513.firebaseio.com"
});

io.on('connection', function(client) {
    console.log('Client connected...');
	
    client.on('join', function(data) {
		alertController.returnAlerts();
    });
});


module.exports.sendListNotif = (tbl) => {
	let d = tbl

	console.log("sendlistnotif", tbl)
	var message = {
		topic: d.departement.replace(/\s+/g, ''),
		notification: {
			title: 'Information',
			body: 'Une info a été envoyée de ' + d.city
		},
	};

	admin.messaging().send(message)
		.then((response) => {
			console.log('Successfully sent message:', response);
		})
		.catch((error) => {
			console.log('Error sending message:', error);
		})
	;
}

module.exports.sendAlertsAdd = (tbl) => {
	let d = tbl[0]

	var message = {
		topic: d.departement.replace(/\s+/g, ''),
		notification: {
			title: 'Alertes',
			body: 'Une alerte a été lancée de ' + d.city
		}
	};

	admin.messaging().send(message)
		.then((response) => {
			console.log('Successfully sent message:', response);
		})
		.catch((error) => {
			console.log('Error sending message:', error);
		})
	;

    io.sockets.emit('add_alerts', tbl);
}

module.exports.sendAlertsRemove = (tbl) => {
    io.sockets.emit('remove_alerts', tbl);
}

module.exports.sendAlertsGet = (tbl) => {
    io.sockets.emit('get_alerts', tbl);
}

setInterval(() => {
	io.sockets.emit('users_count', 12345)
}, 5000)

app.use(helmet());
app.use(morgan('tiny'));
app.use(
	cors({
		//origin: process.env.CLIENT_URL
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // folder to upload files

global.__basedir = __dirname; // very important to define base directory of the project. this is useful while creating upload scripts

multer({
	limits: {fieldSize: 25 * 1024 * 1024},
});
  
const Storage = multer.diskStorage({
	destination(req, file, callback) {
	  callback(null, './images');
	},
	
	filename(req, file, callback) {
	  callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
	},
});
  
// Connect Database
const con = require('./db');

// Routes
app.get('/', (req, res, next) => {
	try {
		res.json({
			status: 'success',
			message: 'Welcome 🙏',
		});
	} catch (err) {
		return next(err);
	}
});

const alertRoute = require('./routes/alertRoute');
const userRoute = require('./routes/userRoute');
const appRoute = require('./routes/appRoute');

app.use([alertRoute, userRoute, appRoute]); // you can add more routes in this array

//404 error
app.get('*', function (req, res) {
	res.status(404).json({
		message: 'What?? 🙅',
	});
});

//An error handling middleware
app.use((err, req, res, next) => {
	console.log(`[MyHeroApi] : Error Handler`)

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err: err,
	});
});

app.post('/api/upload', (req, res) => {
	let upload = multer({storage: Storage}).single('picture');
	upload(req, res, function (err) {
	  if (!req.file) {
		return res.send('Please select an image to upload');
	  } else if (err instanceof multer.MulterError) {
		return res.send(err);
	  } else if (err) {
		return res.send(err);
	  }
	  // Display uploaded image for user validation
	  res.send(req.file.path); // send uploaded image
	});
});

// Run the server
const port = process.env.PORT || 3333;
server.listen(port, () =>
	console.log(`[MyHeroApi] : Started on ${port}`)
);




//https.createServer(options, app).listen(3335);

console.log()