var http = require('http');
var server = http.createServer(function(req, resp) {
    console.log(req.url);      // /
    console.log(req.method);   // GET
    console.log(req.headers);
    /*
     { host: 'localhost:8888',
     connection: 'keep-alive',
     pragma: 'no-cache',
     'cache-control': 'no-cache',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2873.0 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, sdch, br',
            'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6',
            cookie: 'Webstorm-92d040e3=fb02a786-b549-45c5-97a9-adc8d8092d33' }
     */

});
server.listen(8888, 'localhost');