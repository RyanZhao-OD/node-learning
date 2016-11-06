var fs = require('fs');
// var readStream = fs.createReadStream('./stream.txt');
// console.log(readStream);
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

// var readStream = fs.createReadStream('./stream.txt');
// highWaterMark 64*1024 默认读取64k
// readStream.on('data', function (data) {
//     // data是Buffer对象
//     console.log(data);   //<Buffer 61 62 63 0d 0a>
// });
// var readStream = fs.createReadStream('./stream.txt', {highWaterMark: 1});
// readStream.on('data', function (data) {
//     console.log(data);
//     // <Buffer 61>
//     // <Buffer 62>
//     // <Buffer 63>
//     // <Buffer 0d>
//     // <Buffer 0a>
// });

// var arr = [];
// var readStream = fs.createReadStream('./stream.txt', {highWaterMark: 1});
// readStream.on('data', function (data) {
//     // data是Buffer对象
//     console.log(data);
//     arr.push(data);
// });
//
// readStream.on('end', function() {
//     console.log(Buffer.concat(arr).toString());
// });
//
// readStream.on('error', function(error) {
//     console.log(error);
// });


var rs = fs.createReadStream('./stream.txt');
rs.setEncoding('utf8');  //设置了utf8后 highWaterMark最少要给3
var str = '';

rs.on('data', funtion(data) {
    str += data;
    rs.pause(); //暂停出水
});

var timer = setInterval(function() {
    rs.resume();
}, 2000);
rs.on('end', function() {
    console.log(str);
    clearInterval(timer);
});

/*
    pause
    resume
    on('data')
    on('end')
    on('error')
 */