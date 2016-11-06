var fs = require('fs');
// 会判断一些文件的状态, 问阿金是否有更新 文件出生时间 文件访问时间

var stat = fs.statSync('./fs.js');
// console.log(stat);
/*
 { dev: 618959318,
 mode: 33206,
 nlink: 1,
 uid: 0,
 gid: 0,
 rdev: 0,
 blksize: undefined,
 ino: 82472168176290450,
 size: 518,
 blocks: undefined,
 atime: 2016-11-05T08:33:27.276Z,
 mtime: 2016-11-05T08:33:27.276Z,
 ctime: 2016-11-05T08:33:27.313Z,
 birthtime: 2016-11-05T08:21:27.055Z }
 */

// 常用:
/*
 atime 访问时间
 mtime 修改时间 修改内容后又还原，不一定有修改 也算
 ctime 修改时间 内容一定要发生变化
 birthtime 文件创建时间
 */

// stat可以判断是目录还是文件
// var stat = fs.statSync('./fs.js');
// console.log(stat.isFile());
// console.log(stat.isDirectory());

console.log(fs.existsSync('./a'));
console.log(fs.existsSync('./fs.js'));