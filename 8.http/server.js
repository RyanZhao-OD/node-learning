const http = require('http');

let server = http.createServer(function (req, res) {
    // req 客户端的请求
    // res 服务端的响应
    // res.writeHeader(200, {'Content-Type': 'text/plain;charset=utf8'});
    res.setHeader('Content-Type', 'text/plain;charset=utf8');
    res.statusCode = 200;
    res.write('hello ');
    res.write('呵呵 ');
    res.end('end');
});

server.listen(8888, 'localhost');
