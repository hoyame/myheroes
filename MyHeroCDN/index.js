const Express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = Express();

var upload = multer({
  dest: 'uploads/'
});

var type = upload.single('file');

app.get("/Kiruu.jpg", (req, res) => {
  res.sendFile(__dirname + "/uploads/Kiruu.jpg");
});

app.post('/api/upload', type, (req, res) => {
  var tmp_path = req.file.path;
  var target_path = 'uploads/' + req.file.originalname;

  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  //src.on('end', function() { res.render('complete'); });
  //src.on('error', function(err) { res.render('error'); });

  res.status(200).json({
    message: 'success!',
  });
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});