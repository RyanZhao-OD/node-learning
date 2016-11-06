// global.Buffer
// var buffer = new Buffer(); // First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
// var buffer = new Buffer(6);
// console.log(buffer);
// 每次都变
// <Buffer e0 da 0f 4a 4e 00>
// <Buffer 07 00 00 00 00 00>
// <Buffer 00 00 00 00 00 00>
// <Buffer 78 c2 01 7a e9 01>


//将buffer写成固定的内容
// buffer.fill(16);
// console.log(buffer);  //<Buffer 10 10 10 10 10 10>   16进制
// buffer.fill(15);
// console.log(buffer);    // <Buffer 0f 0f 0f 0f 0f 0f>

// 2.通过数组的方式创建buffer    数字每一项最大255 超过的自动减去255,字符串之类不识别的去
// 最大是255超过255，则对256取模， 负的加256 不是别的为0
// var bufferArray1 = new Buffer([1, 2, 3]);
// console.log(bufferArray1);          // <Buffer 01 02 03>
//
// var bufferArray2 = new Buffer([256, 257, 'aa']);
// console.log(bufferArray2);   //<Buffer 01 02 03>  // <Buffer 00 01 00>

// 3.通过字符串创建
// 1个汉字在utf-8中 占了3个字节
var bufferString = new Buffer('哈哈');
// var bufferString = new Buffer('A', 'utf8');
// var bufferString = new Buffer('哈哈', 'utf8');
// var bufferString = new Buffer('哈哈', 'ASCII');
// console.log(bufferString);   // <Buffer e5 93 88 e5 93 88>
// console.log(bufferString.toString());   // <Buffer e5 93 88 e5 93 88>

// buffer和字符串区别
// var str = '呵呵';
// console.log(str.length);        // 字符串长度
//
// var buffer = new Buffer('呵呵');
// console.log(buffer.length);     //是字节的长度

// 字符串具有不变形
// str[0] = 'a';
// console.log(str);
// buffer[0] = 'a';
// console.log(buffer.toString());

// buffer和数组的区别
// 和数组一样哦独有一个slice方法
// var a = [1, 2, 3];
// var b = a.slice(0, 1);
// console.log(a, b);

// 数组存储的是地址， slice后仍然是地址
// var a = [100];
// var arr = [a, 2, 3];
// var newArr = arr.slice(0);
// a[0] = 200;
// console.log(newArr);   // [ [ 200 ], 2, 3 ]

// buffer截取方法仍然操作的是原buffer
// var buffer = new Buffer([1,2,3]);
// // var newBuffer = buffer.slice(0, 1);
// // newBuffer[0] = 14;
// // console.log(buffer); <Buffer 0e 02 03>
// var newBuffer2 = buffer.slice(0, 1);
// newBuffer2[0] = 100;
// console.log(buffer); // <Buffer 64 02 03>


// ---------------------------
// 使用方法
// write(string, offset, length, encoding)
// 默认长度是内容长度
// 默认编码格式utf8
// var buffer = new Buffer(12);
// //呵呵哈哈
// buffer.write('呵呵', 0, 6, 'utf8');
// console.log(buffer);
// console.log(buffer.toString());
// buffer.write('呵呵', 6, 6, 'utf8');
// console.log(buffer);
// console.log(buffer.toString());

// copy(targetBuffer, targetStart, sourceStart, sourceEnd)
// copy方法 将n个小buffer粘贴到buffer上
// var buffer = new Buffer(9);
// var buf1 = new Buffer('一二三');
// var buf2 = new Buffer('四五六');
//  buf1.copy(buffer, 0, 0, 6);   //复制 一二
// buf2.copy(buffer, 6, 3, 6);  //复制 五
// console.log(buffer.toString());  // 一二五

//concat(list, totalLength)
// var buf1 = new Buffer('一二');
// var buf2 = new Buffer('三四五');
// var newBuffer = Buffer.concat([buf1, buf2], 9);
// console.log(newBuffer);
// console.log(newBuffer.toString());  // 一二三

// 自己实现concat
// Buffer.myConcat = function(list, totalLength) {
//     if(typeof totalLength == 'undefined') {
//         totalLength = 0;
//         list.forEach(function (buf) {
//             totalLength += buf.length;
//         });
//     }
//     var buffer = new Buffer(totalLength);
//     var index = 0;
//     list.forEach(function (buf) {
//         buf.copy(buffer, index);
//         index += buf.length;
//     });
//     return buffer.slice(0, index);
// };
//
// var buf1 = new Buffer('一二');
// var buf2 = new Buffer('三四五');
// var newBuffer = Buffer.myConcat([buf1, buf2]);
// var newBuffer = Buffer.myConcat([buf1, buf2], 12);
// console.log(newBuffer);
// console.log(newBuffer.toString());  // 一二三

// Buffer.isBuffer()