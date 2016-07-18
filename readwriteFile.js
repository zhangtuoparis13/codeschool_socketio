/**
 * Created by TBtuo on 18/07/16.
 */

var fs = require('fs'); // require filesystem module
var http = require('http');

/*
var file = fs.createReadStream("Readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile);*/

/*http.createServer(function (request,response) {
    var newFile =fs.createWriteStream('reademe.copy2.md');
    request.pipe(newFile);

    request.on('end', function () {
        response.end('uploaded!');
    });
}).listen(8080);*/

http.createServer(function (request, response) {
    var newFile =fs.createWriteStream("reademe_copy3.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;

    request.pipe(newFile);

    request.on('data',function (chunk) {
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes/fileBytes) * 100;
        response.write("progress: " + parseInt(progress,10) + "%\n");
    });
}).listen(8080);



