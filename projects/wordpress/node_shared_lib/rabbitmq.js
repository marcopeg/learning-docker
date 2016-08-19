
var amqp = require('amqplib/callback_api');

var rabbitIsReady = (() => {
    return new Promise((resolve, reject) => {
        amqp.connect('amqp://rabbitmq', (err, conn) => {
            if (err) {
                reject(err);
            } else {
                conn.createChannel((err, ch) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log('RABBITMQ IS READY');
                        resolve(ch);
                    }
                });
            }
        })
    });
})();

exports.isReady = () => rabbitIsReady;

exports.send = (q, msg) => {
    return new Promise(function(resolve, reject) {
        rabbitIsReady
        .then(ch => {
            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, Buffer.from(msg));
            resolve(msg);
        })
        .catch(reject);
    });
};

exports.receive = (q, callback) => {
    return new Promise(function(resolve, reject) {
        rabbitIsReady
        .then(ch => {
            ch.assertQueue(q, {durable: false});
            ch.consume(q, msg => {
                resolve(msg);
                callback(msg);
            }, { noAck: true });
        })
        .catch(reject);
    });
};
