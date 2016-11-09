const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, resp){
    if(req.url == '/') {
        resp.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(resp);
    } else if(req.url == '/script/test.js') {
        resp.setHeader('Expires', new Date(new Date() + 3000).toUTCString());
        resp.setHeader('Cache-control', 'max-age=3');
        resp.setHeader('Content-Type', 'application/x-javacript;charset=utf8');
        fs.createReadStream('./script/test.js').pipe(resp);

    } else {
        resp.statusCode = 404;
        resp.end('404 呵呵');
    }
});

server.listen(8888);