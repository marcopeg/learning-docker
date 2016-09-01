
/**
 * Learning Docker
 * by @thepeg
 * https://github.com/marcopeg/learning-docker
 */

var express = require('express');
var expressApp = express();
var port = process.env.PORT || 8080;

expressApp.get('/', (req, res) => {
    res.send({
        version: '1.0',
        name: 'custom api service',
        path: '/',
    });
});
expressApp.get('/api', (req, res) => {
    res.send({
        version: '1.0',
        name: 'custom api service',
        path: '/api',
    });
});

expressApp.listen(port, function () {
    console.log(new Date(), 'API app listening on port ' + port + '!');
});
