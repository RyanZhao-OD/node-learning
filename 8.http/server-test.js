const http = require('http');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const mime = {
    '.css':'text/css',
    '.js':'application/x-javascript'
};
http.createServer(function (request, response) {
    if(request.url == '/') {
        response.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(response);
    } else {
        //req.url  /index.js  /favicon.ico
        fs.exists('.' + request.url, function (exists) {
            if(exists){
                response.setHeader('Content-Type', mime[path.extname(request.url)] + ';charset=utf8');
                fs.createReadStream('.' + request.url).pipe(response);
            } else {
                response.statusCode = 404;
                response.end('not found');
            }
        });
    }
}).listen(8080);