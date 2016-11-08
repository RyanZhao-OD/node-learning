const fs = require('fs');

//写一个拷贝文件的方法 同步异步的, 先读取在写入
function copySync(source, target) {
    var result = fs.readFileSync(source);
    fs.writeFileSync(target, result);
}
copySync('./test/copySync.txt','./test/copySync1.txt');