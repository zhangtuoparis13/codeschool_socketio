/**
 * Created by TBtuo on 18/07/16.
 */

var http = require('http');
var express = require('express'),
    app = module.exports.app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(80);

io.socket.on('connection', function(client) {
    console.log("Client connected...");
    client.emit('messages', {hello: 'world'});
});
