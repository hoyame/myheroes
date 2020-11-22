const Express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = Express();
app.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

//const upload = multer({ storage: Storage });
//const storage = multer.memoryStorage()
const upload = multer({storage: Storage, limits: {fileSize: 30000000}})


app.get('/', (req, res) => {
  res.status(200).send('You can post to /api/upload.');
});

app.post('/api/upload', upload.single('photo'), (req, res) => {
  console.log('Zfzifbzuifbiugbibigbigb');

  console.log('file', req.files);
  console.log('body', req.body);
  res.status(200).json({
    message: 'success!',
  });
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});