const Express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = Express();
app.use(bodyParser.json());

var upload = multer({ dest: 'images/' })


app.get('/', (req, res) => {
  res.status(200).send('You can post to /api/upload.');
});

app.post('/api/upload', upload.single('avatar'), (req, res) => {
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