
/**
 * Learning Docker
 * by @thepeg
 * https://github.com/marcopeg/learning-docker
 */

// is it worth to add an in-memory caching layer?
// something that lasts few minutes?

var express = require('express');
var redis = require('./lib/redis');

var expressApp = express();
var port = process.env.PORT || 8080;

expressApp.get('/', (req, res) => {
    redis.get('posts')
    .then(msg => JSON.parse(msg))
    .then(msg => res.send(msg))
    .catch(err => res.status(500).send(err));
});

expressApp.get('/:id', (req, res) => {
    redis.get('post-' + req.params.id)
    .then(msg => res.send(msg))
    .catch(err => res.status(500).send(err));
});

expressApp.listen(port, function () {
    console.log(new Date(), 'Frontend API app listening on port ' + port + '!');
});
