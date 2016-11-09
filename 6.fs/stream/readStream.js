const fs = require('fs');
// let readStream = fs.createReadStream('../test/stream.txt');
// console.log(readStream);
// options
//可读流对象
// 相当于在家里安装了一个水管，默认是非流动模式
//监听on data事件将水管打开，fs会以最快的速度不定的发射 emit data事件
/*
 ReadStream {
 _readableState:
 ReadableState {
 objectMode: false,
 highWaterMark: 65536,
 buffer: BufferList { head: null, tail: null, length: 0 },
 length: 0,
 pipes: null,
 pipesCount: 0,
 flowing: null,
 ended: false,
 endEmitted: false,
 reading: false,
 sync: true,
 needReadable: false,
 emittedReadable: false,
 readableListening: false,
 resumeScheduled: false,
 defaultEncoding: 'utf8',
 ranOut: false,
 awaitDrain: 0,
 readingMore: false,
 decoder: null,
 encoding: null },
 readable: true,
 domain: null,
 _events: { end: [Function] },
 _eventsCount: 1,
 _maxListeners: undefined,
 path: './stream.txt',
 fd: null,
 flags: 'r',
 mode: 438,
 start: undefined,
 end: undefined,
 autoClose: true,
 pos: undefined,
 bytesRead: 0 }
 */

// let readStream = fs.createReadStream('../test/stream.txt', {highWaterMark: 1});
// // highWaterMark 每次取多少 默认读取64k  64*1024
// var arr = [];
// readStream.on('data', function (data) {
//     // data是Buffer对象
//     console.log(data);
//     arr.push(data);
//     // <Buffer e4>
//     // <Buffer b8>
//     // <Buffer 80>
//     // <Buffer e4>
//     // <Buffer ba>
//     // <Buffer 8c>
//     // <Buffer e4>
//     // <Buffer b8>
//     // <Buffer 89>
// });
// var readStream = fs.createReadStream('../stream.txt', {highWaterMark: 1});
// readStream.on('data', function (data) {
//     console.log(data);
//     // <Buffer 61>
//     // <Buffer 62>
//     // <Buffer 63>
//     // <Buffer 0d>
//     // <Buffer 0a>
// });

// var arr = [];
// var readStream = fs.createReadStream('../stream.txt', {highWaterMark: 1});
// readStream.on('data', function (data) {
//     // data是Buffer对象
//     console.log(data);
//     arr.push(data);
// });

// readStream.on('end', function() {
//     console.log(Buffer.concat(arr).toString());
// });
//
// readStream.on('error', function(error) {
//     console.log(error);
// });


// var rs = fs.createReadStream('../test/stream.txt');
// rs.setEncoding('utf8');  //设置了utf8后 highWaterMark最少要给3
// var str = '';
//
// rs.on('data', funtion(data) {
//     str += data;
//     rs.pause(); //暂停出水
// });
//
// var timer = setInterval(function() {
//     rs.resume();
// }, 2000);
// rs.on('end', function() {
//     console.log(str);
//     clearInterval(timer);
// });

/*
    pause
    resume
    on('data')
    on('end')
    on('error')
 */

// 每秒读取一次
let rs = fs.createReadStream('../test/stream.txt', {highWaterMark:3});
rs.setEncoding('utf8'); //设置编码格式
//如果编码格式是utf8 最小水位线就是3
var str = '';
//暂停出水 开启出水
rs.on('data',function (data) { //默认每次读取64k 是怎么读的，不停的以最快速度将内容读取到内存中
    str += data;
    console.log('出水');
    rs.pause(); //停止触发data事件
});
var timer = setInterval(function () {
    rs.resume(); //恢复触发resume事件
},1000);

rs.on('end',function () {
    console.log(str);
    clearInterval(timer);
});