const http = require('http');
const fs = require('fs');

let server = http.createServer(function(request, response){
    if(request.url == '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf8');
        fs.createReadStream('./index.html').pipe(response);

    } else if(request.url == '/script/test.js') {
        console.log(new Date());

		/**
		 * Expires策略：Expires是Web服务器响应消息头字段，
		 * 在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。
		 * 不过Expires 是HTTP 1.0的东西，现在默认浏览器均默认使用HTTP 1.1，所以它的作用基本忽略。
		 * Expires 的一个缺点就是，返回的到期时间是服务器端的时间，这样存在一个问题，
		 * 如果客户端的时间与服务器的时间相差很大（比如时钟不同步，或者跨时区），
		 * 那么误差就很大，所以在HTTP 1.1版开始，使用Cache-Control: max-age=秒替代。
		 * Cache-control策略（重点关注）：Cache-Control与Expires的作用一致，都是指明当前资源的有效期，
		 * 控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据。
		 * 只不过Cache-Control的选择更多，设置更细致，如果同时设置的话，其优先级高于Expires。
		 */
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