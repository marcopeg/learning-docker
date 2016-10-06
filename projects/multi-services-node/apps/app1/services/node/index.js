var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('[' + process.env.PROJECT_ENV + '] [' + process.env.NODE_ENV + '] ' + process.env.MSG);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('msg:', process.env.MSG);
});
