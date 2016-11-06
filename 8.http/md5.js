// md5是一种摘要算法
// 1.不可逆
// 2.不管多长的内容 产出的长度是相同的
// 3.不同的内容生成的md5肯定不相同

var crypto  = require('crypto');  // node的加密方法
// console.log(crypto.getHashes());
/*
 [ 'DSA',
 'DSA-SHA',
 'DSA-SHA1',
 'DSA-SHA1-old',
 'RSA-MD4',
 'RSA-MD5',
 'RSA-MDC2',
 'RSA-RIPEMD160',
 'RSA-SHA',
 'RSA-SHA1',
 'RSA-SHA1-2',
 'RSA-SHA224',
 'RSA-SHA256',
 'RSA-SHA384',
 'RSA-SHA512',
 'dsaEncryption',
 'dsaWithSHA',
 'dsaWithSHA1',
 'dss1',
 'ecdsa-with-SHA1',
 'md4',
 'md4WithRSAEncryption',
 'md5',
 'md5WithRSAEncryption',
 'mdc2',
 'mdc2WithRSA',
 'ripemd',
 'ripemd160',
 'ripemd160WithRSA',
 'rmd160',
 'sha',
 'sha1',
 'sha1WithRSAEncryption',
 'sha224',
 'sha224WithRSAEncryption',
 'sha256',
 'sha256WithRSAEncryption',
 'sha384',
 'sha384WithRSAEncryption',
 'sha512',
 'sha512WithRSAEncryption',
 'shaWithRSAEncryption',
 'ssl2-md5',
 'ssl3-md5',
 'ssl3-sha1',
 'whirlpool' ]
 */

console.log(crypto.createHash('md5').update('123456').digest('hex'));
console.log(crypto.createHash('md5').update('123456').digest('hex'));
console.log(crypto.createHash('md5').update('123456').digest('base64'));  // 不够位数 补==