
/**
 * Learning Docker
 * by @thepeg
 * https://github.com/marcopeg/learning-docker
 */
 
var async = require('async');
var request = require('superagent');

var rabbit = require('./lib/rabbitmq');
var redis = require('./lib/redis');

rabbit.receive('cache-refresh', msg => {
    request.get('http://wordpress').end((err, data) => {
        if (err) {
            console.log('>> ERR: it was not possible to fetch from wordpress');
            return;
        }

        console.log('>> ' + data.body.posts.length + ' posts to cache were found');
        async.each(data.body.posts, function(post, done) {
            rabbit.send('cache-post', post.permalink)
            .then(() => done())
            .catch(err => done(err));
        }, function(err) {
            if (err) {
                console.log(err);
                return;
            }
            redis.set('posts', JSON.stringify(data.body.posts))
            .then(() => {
                console.log('<< cache refreshed!');
            })
            .catch(err => {
                console.log('<< ERROR REFRESHING CACHE', err);
            });
        });
    });
});
