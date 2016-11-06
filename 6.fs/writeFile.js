var fs = require('fs');

// 写入的方法，先清空文件中的内容。如果文件不存在 则会先创建文件
// 第二个参数是内容 默认写入格式是utf8


fs.writeFileSync('./write.txt', new Buffer('呵呵哈哈'), {flag: 'a'});
fs.writeFile('./write.txt', new Buffer('呵呵哈哈aaa'), {flag: 'a'}, function () {

});

// fs.appendFile()

function copyFileSync(srcFile, destFile) {
    var dataUtf8 = fs.readFileSync(srcFile, 'utf8');
    fs.writeFileSync(destFile, new Buffer(dataUtf8));
}
function copyFile(srcFile, destFile) {
    fs.readFile(srcFile, 'utf8', function (error, data) {
        fs.writeFileSync(destFile, new Buffer(data), function () {
            
        });
    });

}

copyFile('./data.txt', './copy.txt');