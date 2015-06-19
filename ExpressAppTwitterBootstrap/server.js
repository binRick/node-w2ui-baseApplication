var express = require('express'),
    title = require('app-title')('nodeW2UIapp'),
    config = require('./config'),
    path = require('path'),
    http = require('http'),
    util = require('util'),
    rdb = require('rethinkdb'),
    bodyParser = require('body-parser'),
    wine = require('./routes/wines');

var app = express();
    app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public_html')));

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
var dbConfig = {
    host: config.rethinkHost,
    port: config.rethinkPort,
    db: config.rethinkDB,
};

rdb.connect({
    host: dbConfig.host,
    port: dbConfig.port
}, function(err, connection) {
    if (err) {
        console.log("ERROR: %s:%s", err.name, err.msg);
        process.exit(1);
    } else {
        wine.setupDB(dbConfig, connection);
        connection.use(dbConfig.db);
        wine.connection = connection;
        http.createServer(app).listen(config.expressPort, config.expressHost, function() {
            console.log("Express server listening on " + config.expressHost + ":" + config.expressPort);
        });
    }
});
