/**
 * Created by TBtuo on 18/07/16.
 */

var express = require('express');
// var app = express.createServer();
var app = express();

app.get('/',function (request, response) {
    response.sendfile(__dirname + "/index.html");
});

app.listen(8080);

