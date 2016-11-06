// 同步和异步共存
// 异步有回调函数
// fs file system

var fs = require('fs');
// var data = fs.readFileSync('./data.txt');
// var dataUtf8 = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);
// console.log(dataUtf8);

try {
    var dataTryCatch = fs.readFileSync('./data111.txt', 'utf8');
    console.log(dataTryCatch);
} catch (e) {
    console.log(e);
}



fs.readFile('./data.txt', 'utf8', function(error, data) {
    console.log(data);
});

// 同步才能try catch