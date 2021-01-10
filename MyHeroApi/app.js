require('dotenv').config();
const server = require('http').createServer();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const bodyParser = require('body-parser');
const io = require('socket.io')(server);

const helmet = require('helmet');


const app = express();

io.on('connection', client => {
	client.on('event', data => { /* … */ });
	client.on('disconnect', () => { /* … */ });
});

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
app.listen(port, () =>
	console.log(`[MyHeroApi] : Started on ${port}`)
);




//https.createServer(options, app).listen(3335);
