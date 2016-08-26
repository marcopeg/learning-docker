
/**
 * Learning Docker
 * by @thepeg
 * https://github.com/marcopeg/learning-docker
 */
 
var request = require('superagent');
var rabbit = require('./lib/rabbitmq');
var redis = require('./lib/redis');

rabbit.receive('cache-post', msg => {
    var permalink = msg.content.toString();
    request.get(permalink).end((err, data) => {
        if (err) {
            return done(err);
        }

        var post = data.body.post;

        redis.set('post-' + post.id, JSON.stringify(post))
        .then(() => console.log('>> queued post ' + post.id))
        .catch(err => console.error(err));
    });
});
