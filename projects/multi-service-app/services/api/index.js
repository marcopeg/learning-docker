var express = require('express');
var app = express();

var data = require('./db.json');

app.get('/', (req, res) => {
    res.send('+ok - ' + process.env.HELLO_MSG);
});

app.get('/avengers', (req, res) => {
    res.send(data.avengers);
});

app.listen(8080, () => {
    console.log('[' + process.env.NODE_ENV + '] API Service is running...');
});
