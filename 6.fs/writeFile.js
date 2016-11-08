const fs = require('fs');

// 写入的方法，先清空文件中的内容。如果文件不存在 则会先创建文件
// 参数path, data, options
// data Buffer类型 默认写入格式是utf8
// options flag:'a'追加
fs.writeFileSync('./test/writeFile.txt', new Buffer('呵呵aaa'), {flag: 'a'});
fs.writeFile('./test/writeFile.txt', new Buffer('呵呵哈哈aaa'), {flag: 'a'}, function (error) {
    console.log(error);
});

// fs.appendFile()




