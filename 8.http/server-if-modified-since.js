const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url == '/'){
        response.setHeader('Content-Type','text/html; charset=utf8');
        fs.createReadStream('./index.html').pipe(response);

    } else if (request.url == '/script/test.js'){

        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');
        let ctime = fs.statSync('./script/test.js').ctime.toUTCString();
        let ifModifiedSince = request.headers['if-modified-since']; //上一次修改时间
        console.log('------');
        console.log(ctime);
        console.log(ifModifiedSince);

        if(ifModifiedSince && (ctime == ifModifiedSince)) { //缓存的时间和当前修改过的时间相同，才会调用缓存
            response.statusCode = 304;
            response.end('');
        } else {
            response.setHeader('Last-Modified', ctime);
            fs.createReadStream('./script/test.js').pipe(response);
        }

    } else {
        response.statusCode = 404;
        response.end('not found');
    }
}).listen(8080);