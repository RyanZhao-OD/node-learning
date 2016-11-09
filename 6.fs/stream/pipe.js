const fs = require('fs');
function copy(source, target) {
    let rs = fs.createReadStream(source);
    let ws = fs.createWriteStream(target);
    rs.pipe(ws); //将可读流中的内容，导入到可写流中
}
copy('../test/copyByPipe.txt','../test/copyByPipe1.txt');