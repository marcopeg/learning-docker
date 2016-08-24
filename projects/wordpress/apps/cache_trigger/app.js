
var express = require('express');
var rabbit = require('./lib/rabbitmq');

var expressApp = express();
var port = process.env.PORT || 8080;

function triggerCache() {
    return new Promise((resolve, reject) => {
        var ts = Date.now().toString();
        rabbit.send('cache-refresh', ts)
            .then(() => resolve(ts))
            .catch(reject);
    });
}

expressApp.get('/', (req, res) => {
    triggerCache()
    .then(ts => res.send('+OK ' + ts))
    .catch(err => res.send(err.toString()));
});

expressApp.listen(port, function () {
    console.log(new Date(), 'Cache trigger app listening on port ' + port + '!');
});

rabbit.isReady().then(triggerCache);
