// 创建一个可读流 和一个可写流
// 1.每次读入一次后开始写入,在on data中调用write方法
// 2.当文件不能写入时 暂停读取 如果写入返回false 调用pause()
// 3.等待抽干后再调用恢复方法 恢复读取 在drain()方法中调用resume()
// 4.监听读取后关闭掉写入方法ws.end() rs.on('end')中调用ws.end()
var fs = require('fs');

function copy(source, target) {
    var readStream = fs.createReadStream(source, {highWaterMark: 4});
    var writeStream = fs.createWriteStream(target, {highWaterMark: 1});
    // readStream.on('data', function (data) {
    //     // data是Buffer对象
    //     write(data.toString());
    // });
    //
    // function write(data) {
    //     var flag = true;//默认可以写入
    //     while (flag){
    //         flag = writeStream.write(data);
    //         if(!flag) {
    //             writeStream.pause();
    //         }
    //     }
    // }
    //
    //
    // readStream.on('end', function() {
    //     writeStream.end();
    // });
    //
    // writeStream.on('drain',function () { //如果肚子没吃满，消化后也不会触发drain
    //     writeStream.resume();
    // });
    // write();
    readStream.on('data', function(data) {
        var flag = writeStream.write(data);
        if(!flag) {
            readStream.pause();
        }
    });
    writeStream.on('drain', function() {
        console.log('干了');
        readStream.resume();
    });

    readStream.on('end', function() {
        writeStream.end();
    });
}

copy('./copy.txt', './copy1.txt');

// node里的pipe

function nodeCopy(source, target) {
    var rs = fs.createReadStream(source);
    var ws = rs.createWriteStream(target);
    rs.pipe(ws);
}

nodeCopy('./nodeCopy.txt', './nodeCopy1.txt');