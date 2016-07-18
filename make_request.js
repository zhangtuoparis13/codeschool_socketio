/**
 * Created by TBtuo on 18/07/16.
 */

var http = require('http');

// var message = "Here is looking at you, kid.";
var makeRequest = function (message) {
    var options ={
        host: 'localhost', port: 8080, path: '/', method: 'POST'
    };
    var request = http.request(options,function (response) {
        response.on('data', function (data) {
            console.log(data); // logs response body
        });
    });
    request.write(message); // begins request
    request.end(); // finishes request
};
module.exports = makeRequest;
