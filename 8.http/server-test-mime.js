const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');

http.createServer(function (req, res) {
    let pathname = url.parse(req.url, true).pathname;
    if(pathname == '/') {
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    } else {
        fs.exists('.' + pathname, function (exists) {
            if(exists){
                res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf8');
                fs.createReadStream('.' + pathname).pipe(res);
            } else {
                res.statusCode = 404;
                res.end('not found');
            }
        });
    }
}).listen(3001);