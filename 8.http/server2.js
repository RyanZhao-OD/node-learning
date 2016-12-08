const http = require('http');
let server = http.createServer(function(request, response) {
    console.log(request.url);      //
    console.log(request.method);   // GET
    console.log(request.headers);
    response.end('hehe');
});
server.listen(8080, 'localhost');