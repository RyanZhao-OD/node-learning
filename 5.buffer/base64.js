//进制转换
// parseInt() 任意进制转换成10进制
console.log(parseInt('11111111', 2));    // 255

// toString() 将任意进制转换成任意进制
// 默认10进制，可以指定转化的进制
console.log((0xff).toString(2));   // 11111111
console.log((100).toString(16));   // 64

//base64 编码格式 不是加密 md5 sha1 sha256
//是将内容转换成可见编码
/*
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
1234567890
+/
*/

//将2进制的取值范围限制到64之内 0-63
//00111111  2^6-1 一个汉字由三个字节组成，每个字节减小到64以下，在可见编码下取值即可
console.log(new Buffer('珠')); // <Buffer e7 8f a0>
//1.将16进制转化成2进制
console.log((0xe7).toString(2)); // 11100111
console.log((0x8f).toString(2)); // 10001111
console.log((0xa0).toString(2)); // 10100000

/*
 11100111 10001111 10100000
 (1).合并得到
 111001111000111110100000
 (2).截取每6位
 111001 111000 111110 100000
 (3).前面补足0
 00111001 00111000 00111110 00100000

 再将4个数转换成10进制
 */

console.log(parseInt('00111001',2)); // 57
console.log(parseInt('00111000',2)); // 56
console.log(parseInt('00111110',2)); // 62
console.log(parseInt('00100000',2)); // 32

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
console.log(str[57]+str[56]+str[62]+str[32]); //54+g base64编码


//写一个简单的方法，我输入任意汉字，把他转换出base64编码
//1.先将buffer里的每一个字节全部转换成2进制，拼接到一起
//2.101010 101010 10每6位 分开，前面+ 两个0
//3.转换成10进制
//4.去可见编码中取值
function base64(str) {
    let mapping = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let buffer = new Buffer(str);
    let binaryStr = "";
    buffer.forEach(function (item) { //item十进制
        binaryStr += (item).toString(2); //将10进制转换成2进制，累加
    });

    let arr = []; //每6位拆分开
    let result = [];
    for (let i = 0; i < binaryStr.length / 6; i++) {
        arr.push(parseInt('00' + binaryStr.slice(i * 6, (i + 1) * 6), 2));
    }

    arr.forEach(function (item) {
        result += mapping[item];
    });
    return result;
}
console.log(base64('http://image.zhangxinxu.com/image/emtion/hum.png'));


//2.将三个8位的字节变成4个字节6位