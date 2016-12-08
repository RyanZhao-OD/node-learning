const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url == '/'){
        response.setHeader('Content-Type','text/html; charset=utf8');
        fs.createReadStream('./index.html').pipe(response);

    } else if (request.url == '/script/test.js'){
        console.log(11);

        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');
        let timer = fs.statSync('./script/test.js').ctime.toUTCString();
        let ctime = request.headers['if-modified-since']; //上一次修改时间

        if(ctime && (timer == ctime)) { //缓存的时间和当前修改过的时间相同，才会调用缓存
            response.statusCode = 304;
            response.end('');
        } else {
            response.setHeader('Last-Modified', timer);
            fs.createReadStream('./script/test.js').pipe(response);
        }

    } else {
        response.statusCode = 404;
        response.end('not found');
    }
}).listen(8080);