const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');

http.createServer(function (request, response) {
    let pathname = url.parse(request.url, true).pathname;
    if(pathname == '/') {
        response.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    } else {
        fs.exists('.' + pathname, function (exists) {
            if(exists){
                response.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf8');
                fs.createReadStream('.' + pathname).pipe(response);
            } else {
                response.statusCode = 404;
                response.end('not found');
            }
        });
    }
}).listen(8080);