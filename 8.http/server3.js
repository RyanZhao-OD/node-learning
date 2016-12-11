const http = require('http');
const fs = require('fs');

let server = http.createServer(function(request, response){

    if(request.url == '/') {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./index.html', function(error, data) {
            console.log(data);
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.end('404 呵呵');
    }
});

server.listen(8080);