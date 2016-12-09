const http = require('http');
const fs = require('fs');
const crypto = require('crypto');

http.createServer(function (request, response) {
    if (request.url == '/'){
        response.setHeader('Content-Type','text/html; charset=utf8');
        fs.createReadStream('./index.html').pipe(response);
    } else if (request.url == '/script/test.js'){
        //内容频繁的更改，精确不到秒，很多服务器修改时间不准确
        //判断文件中的内容，比较上一次的内容，和这一次的内容，如果有区别说明更改过，发送一个最新的内容，给浏览器端
        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');

        let data = fs.readFileSync('./script/test.js');
        let etag = crypto.createHash('md5').update(data).digest('base64');

        //都能获取一个最新值和上次设置的比  if-none-match
        let ifNoneMatch = request.headers['if-none-match']; //上一次  ***
        if(ifNoneMatch && (ifNoneMatch == etag)) {
            response.statusCode = 304;
            response.end('');
        } else {
            response.setHeader('Etag', etag);//第一次访问时把内容进行加密放到头部
            fs.createReadStream('./script/test.js').pipe(response);
        }
    } else {
        response.statusCode = 404;
        response.end('404 呵呵');
    }
}).listen(8080);
