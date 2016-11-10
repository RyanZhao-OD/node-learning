
const path = require('path');

// 获取基础路径
// 获取不戴后缀的文件名, 可以制定扩展名留取想要的部分
// path, ext
console.log(path.basename('test.js', '.js'));  // test

// 获取文件的扩展名 读取最后一个.后的内容
console.log(path.extname('test.min.js'));   // .js

// 拼接路径
let str = './a/b/c/d';
let str1 = './a/../b/c/d/e';
console.log(path.join(str, str1));     // a\b\c\d\b\c\d\e

// 解析一个绝对路径
console.log(path.join(__dirname, str1));     // H:\04.learning\node-learning\7.path\b\c\d\e
console.log(path.join(__dirname, 'a/../b')); // H:\04.learning\node-learning\7.path\b


// require.resolve('./xxx.js'); // 对一个已经存在的文件 解析绝对路径, 不存在就报错
// path.resolve('./xxx.js');  //不管文件是否存在，解析绝对路径
// console.log(require.resolve('./xxx.js'));
console.log(path.resolve('./xxx.js'));

console.log(path.normalize('a/b/c/../////d'));
