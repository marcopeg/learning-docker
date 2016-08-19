
var redis = require('redis');

var redisIsReady = (function() {
    return new Promise(function(resolve, reject) {
        var redisClient = redis.createClient('6379', 'redis');
        redisClient.on('connect', function(err) {
            if (err) {
                reject(err);
            } else {
                console.log('REDIS IS READY');
                resolve(redisClient);
            }
        });
    });
})();

exports.isReady = () => redisIsReady;

exports.get = (key) => {
    return new Promise(function(resolve, reject) {
        redisIsReady.then(function(redisClient) {
            redisClient.get(key, function(err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        }).catch(reject);
    });
};

exports.set = (key, value) => {
    return new Promise(function(resolve, reject) {
        redisIsReady
        .then(function(redisClient) {
            redisClient.set([key, value], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
        .catch(reject);
    });
};
