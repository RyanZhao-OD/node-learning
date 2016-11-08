// console.log(parseInt('11', 2));
// console.log(parseInt('11111111', 2));
//
// //将任意进制转换成任意进制,默认10进制
// console.log((0xff).toString(10));
// console.log((075).toString(10));
// console.log((100).toString(16));

// base64编码格式 不是加密
// 加密 md5 sha1 sha256
// base64是将内容转换成可见编码，将2进制的取值范围限制到64之内 0-63
// 一个汉字有3个字节组成 每个字节减小到64以下，在可见编码下取值即可
/*

ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
+/
 */
// console.log(new Buffer('哈'));  // <Buffer e5 93 88>
// 1.将16进制转化成2进制 11100101 10010011 10001000
// console.log((0xe5).toString(2));
// console.log((0x93).toString(2));
// console.log((0x88).toString(2));
//
// // 2.将3个8位的字节变成4个字节6位
// // 111001 011001 001110 001000
// // 00111001 00011001 00001110 00001000
//
// console.log(parseInt('00111001', 2));  // 57
// console.log(parseInt('00011001', 2));  // 25
// console.log(parseInt('00001110', 2));  // 14
// console.log(parseInt('00001000', 2));  // 8
// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// console.log(str[57] + str[25] + str[14] + str[8]);   // 5ZOI

// 1.将buffer里的每一个字节全部转换成2进制 拼接到一起
// 2.将整个拼接好的内容 每6位分开，前面补齐0,
// 3.转换成10进制
// 4.去可见编码中取值
function toBase64(str) {
    var base64Mapping = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var buffer = new Buffer(str);
    var binaryBufferArr = [];
    var binaryBufferStr = '';
    var result = '';
    var base64StrArr = [];
    var base64ArrTen = [];

    for(var i = 0; i < buffer.length; i++) {
        binaryBufferArr.push(buffer[i].toString(2));
    }

    binaryBufferStr = binaryBufferArr.join('');

    for(var i = 6, index = 0; i <= binaryBufferStr.length; i = i + 6, index += 6) {
        var item = '00' + binaryBufferStr.slice(index, i);
        base64StrArr.push(item);
    }
    base64StrArr.forEach(function(item) {
        base64ArrTen.push(parseInt(item, 2));
    });

    base64ArrTen.forEach(function(item) {
        result += base64Mapping[item];
    });
    return result;

}

console.log(toBase64('呵哈'));

function base64(str) {
// 1.将buffer里的每一个字节全部转换成2进制 拼接到一起
// 2.将整个拼接好的内容 每6位分开，前面补齐0,
// 3.转换成10进制
// 4.去可见编码中取值

}