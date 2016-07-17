/**
 * Created by TBtuo on 17/07/16.
 */

var http = require('http');
// How we require the modules

http.createServer(function (request,response) {
    response.writeHead(200); // Status code in header
    response.write("Dog is running."); // Response body
    setTimeout(function () { // Represent long running process
        response.write("Dog is done.");
        response.end(); // Close the connection
    }, 5000);
}).listen(8080); // listen for connections on this port

console.log("Listening on port 8080...");