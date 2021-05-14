const Express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = Express();

var upload = multer({
  dest: 'uploads/'
});

var type = upload.single('file');

app.get("/api/avatar/:id", (req, res) => {
  var id = req.params.id;

  res.sendFile(__dirname + "/uploads/" + id + ".jpg");
});

app.get("/api/alert/:id", (req, res) => {
  var id = req.params.id;

  res.sendFile(__dirname + "/uploads/" + 'alert-' + id + ".jpg");
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

app.post('/api/alert/upload', type, (req, res) => {
  var tmp_path = req.file.path;
  var target_path = 'uploads/' + 'alert-' + req.file.originalname;

  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);

  res.status(200).json({
    message: 'success!',
  });
});

app.post('/api/alert/delete', type, (req, res) => {
  const webi = req.query.image || req.body.image;
  //const webi = req.body.imagename
  var target_path = 'uploads/' + 'alert-' + webi + '.jpg';

  console.log(target_path)

  fs.stat(target_path, (err, stats) => {
    console.log(stats);

    if (err) {
      return console.error(err);
    }

    fs.unlink(target_path, (err) => {
      if (err) return console.log(err)
      console.log('file deleted succeful')
    })
  })
})

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});