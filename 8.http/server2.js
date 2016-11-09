const http = require('http');
let server = http.createServer(function(req, resp) {
    console.log(req.url);      //
    console.log(req.method);   // GET
    console.log(req.headers);
});
server.listen(8888, 'localhost');