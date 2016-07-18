/**
 * Created by TBtuo on 18/07/16.
 */

var http = require('http');

/*http.createServer(function (request,response) {
    response.writeHead(200);
    request.on('data', function (chunk) {
        // console.log(chunk.toString());
        response.write(chunk);
    });

    request.on('end',function () {
        response.end();
    });
}).listen(8080);*/

http.createServer(function (request,response) {
    response.writeHead(200);
    request.pipe(response);
}).listen(8080);

console.log("Listening on port 8080...");