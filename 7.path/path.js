
var path = require('path');
// 获取基础路径

// 获取不戴后缀的文件名, 可以制定扩展名留取想要的部分
// path, ext
console.log(path.basename('test.js', '.js'));

// 获取文件的扩展名 读取最后一个.后的内容
console.log(path.extname('test.min.js'));

// 拼接路径
var str = 'a/b/c/d';
var str1 = 'a/b/c/d/e';
console.log(path.join(str, str1));
// 解析一个绝对路径
console.log(path.join(__dirname, str1));
console.log(path.join(__dirname, 'a/../b'));


// require.resolve('./xxx.js'); // 对一个已经存在的文件 解析绝对路径
// path.resolve('./xxx.js');  //不管文件是否存在，解析绝对路径
console.log(path.resolve('./xxx.js'));

/*
 basename
 extname
 join
 resolve


 */