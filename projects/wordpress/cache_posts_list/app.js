
var express = require('express');

var async = require('async');
var request = require('superagent');

var rabbit = require('./lib/rabbitmq');
var redis = require('./lib/redis');

var expressApp = express();
var port = process.env.PORT || 8080;

function cachePostsList() {
    return new Promise((resolve, reject) => {
        console.log('>> Start refreshing cache...');
        request.get('http://wordpress').end((err, data) => {
            if (err) {
                return reject(err);
            }
            console.log('>> ' + data.body.posts.length + ' posts to cache were found');
            async.each(data.body.posts, function(post, done) {
                rabbit.send('cache-post', post.permalink)
                .then(() => done())
                .catch(err => done(err));
            }, function(err) {
                if (err) {
                    return reject(err);
                }
                redis.set('posts', JSON.stringify(data.body.posts))
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
    cachePostsList()
    .then(() => res.send('+OK'))
    .catch(err => res.status(500).send(err));
});

expressApp.listen(port, function () {
    console.log(new Date(), 'Cache app listening on port ' + port + '!');
});

redis.isReady().then(cachePostsList);
