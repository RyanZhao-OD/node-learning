// md5是一种摘要算法
// 1.不可逆
// 2.不管多长的内容 产出的长度是相同的
// 3.不同的内容生成的md5肯定不相同

var crypto  = require('crypto');  // node的加密方法
// console.log(crypto.getHashes());


console.log(crypto.createHash('md5').update('123456').digest('hex'));
console.log(crypto.createHash('md5').update('123456').digest('base64'));  // 不够位数 补==