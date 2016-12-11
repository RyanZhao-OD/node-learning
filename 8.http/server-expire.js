const http = require('http');
const fs = require('fs');

let server = http.createServer(function(request, response){
    if(request.url == '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf8');
        fs.createReadStream('./index.html').pipe(response);

    } else if(request.url == '/script/test.js') {
        console.log(new Date());

        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');
        response.setHeader('Expires', new Date(new Date() + 5000).toGMTString());
        response.setHeader('Cache-control', 'max-age=5');

        // response.setHeader('Expires', 0);
        // response.setHeader('Cache-control', 'no-cache');

        fs.createReadStream('./script/test.js').pipe(response);

    } else {
        response.statusCode = 404;
        response.end('404 呵呵');
    }
});

server.listen(8080);