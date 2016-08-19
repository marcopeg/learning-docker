
var express = require('express');
var redis = require('redis');
var async = require('async');
var request = require('superagent');

var expressApp = express();
var redisClient = redis.createClient('6379', 'redis');

var port = process.env.PORT || 8080;

var redisIsReady = (function() {
    return new Promise(function(resolve, reject) {
        redisClient.on('connect', function(err) {
            console.log('redisClient is connected');
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
})();

function redisGet(key) {
    return new Promise(function(resolve, reject) {
        redisIsReady.then(function() {
            redisClient.get(key, function(err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        }).catch(reject);
    });
}

function redisSet(key, value) {
    return new Promise(function(resolve, reject) {
        redisIsReady.then(function() {
            redisClient.set([key, value], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }).catch(reject);
    });
}

function populateCache() {
    return new Promise((resolve, reject) => {
        console.log('>> Start refreshing cache...');
        request.get('http://wordpress').end((err, data) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log('>> ' + data.body.posts.length + ' posts to cache were found');
            async.each(data.body.posts, function(post, done) {
                request.get(post.permalink).end((err, data) => {
                    if (err) {
                        return done(err);
                    }
                    var post = data.body.post;
                    var postJSON = JSON.stringify(post);

                    console.log('>> queue post ' + post.id);
                    redisSet('post-' + post.id, postJSON).then(() => done()).catch(done);
                });
            }, function(err) {
                if (err) {
                    return res.status(500).send(err);
                }
                redisSet('posts', JSON.stringify(data.body.posts))
                .then(() => {
                    console.log('<< cache refreshed!');
                    resolve();
                })
                .catch(err => {
                    console.log('<< ERROR REFRESHING CACHE', err);
                    reject(err);
                });
            });
        });
    });
}

expressApp.get('/', (req, res) => {
    populateCache()
    .then(() => res.send('+OK'))
    .catch(err => res.status(500).send(err));
});

expressApp.listen(port, function () {
    console.log(new Date(), 'Cache app listening on port ' + port + '!');
});

redisIsReady.then(populateCache);
