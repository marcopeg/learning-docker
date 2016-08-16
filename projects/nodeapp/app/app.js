/**
 * LearningDocker
 * @thepeg
 * https://github.com/marcopeg/learning-docker
 *
 * NodeJS Server App
 * (this is a complex app, do NOT expect to understand every detail of it!)
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var count = 0;

app.get('/', function (req, res) {
    console.log(new Date(), 'a request happened!', count);
    res.send([
        '<link rel="stylesheet" href="style.css">',
        '<h1>Learning Docker</h1>',
        '<a href="https://github.com/marcopeg/learning-docker">',
            'check it out on github.com/margopeg &raquo;',
        '</a>',
        '<p>visitor n.' + count + '</p>',
    ].join(''));
    count++;
});

app.get('/style.css', function(req, res) {
    res.send('html{padding:10%;font-family:monospace;color:#0f0;background:#222}body{-webkit-transform:rotate(-10deg);-ms-transform:rotate(-10deg);transform:rotate(-10deg)}h1,p{margin:0}a{display:inline-block;padding:5px;background-color:#fff;text-decoration:none}');
});

app.listen(port, function () {
    console.log(new Date(), 'Example app listening on port ' + port + '!');
});
