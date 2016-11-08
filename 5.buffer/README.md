## global.Buffer
```js
// First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
var buffer = new Buffer(6); //6个字节长度
console.log(buffer);
console.log(buffer.length); // 6
// 每次都变
// <Buffer e0 da 0f 4a 4e 00>
// <Buffer 07 00 00 00 00 00>
// <Buffer 70 9f ad 3d 17 02>
```
用于处理二进制数据

## Buffer.prototype.fill() 填充数据

```js
buffer.fill(16);
console.log(buffer);  //<Buffer 10 10 10 10 10 10>   16进制
```
    
## 通过数组的方式创建buffer

数字每一项最大255 超过的自动减去255,字符串之类不识别的去
最大是255超过255，则对256取模， 负的加256 不是别的为0
    
```js
var bufferArray1 = new Buffer([1, 2, 3]);
console.log(bufferArray1);          // <Buffer 01 02 03>

var bufferArray2 = new Buffer([256, 257, 'aa']);
console.log(bufferArray2);   //<Buffer 01 02 03>  // <Buffer 00 01 00>
```

- Buffer.prototype.slice()
和Array一样都有slice方法
    ```js
    // 数组存储的是地址， slice后仍然是地址
    var a = [100];
    var arr = [a, 2, 3];
    var newArr = arr.slice(0);
    a[0] = 200;
    console.log(a, arr, newArr);   // [ [ 200 ], 2, 3 ]
    
    // buffer截取方法仍然操作的是原buffer
    var buffer = new Buffer([1,2,3]);   // <Buffer 01 02 03>
    var newBuffer = buffer.slice(0, 1); // <Buffer 01>
    newBuffer[0] = 14;
    console.log(buffer, newBuffer); // <Buffer 0e 02 03> <Buffer 0e>
    ```


## 通过字符串的方式创建

1个汉字在utf-8中 占了3个字节
```js
var bufferString = new Buffer('哈哈');
console.log(bufferString);   // <Buffer e5 93 88 e5 93 88>
console.log(bufferString.toString());   // 哈哈

var bufferString = new Buffer('A', 'utf8');
console.log(bufferString);   // <Buffer 41>
console.log(bufferString.toString());   // A
```

- buffer和字符串区别
    + 长度
    ```js
    var str = '呵呵';
    console.log(str.length);        // 2 字符串长度
    
    var buffer = new Buffer('呵呵');
    console.log(buffer.length);     //6 字节的长度
    ```
    
    + 修改 字符串具有不变形
    ```js
    str[0] = 'a';
    console.log(str);  // 呵呵
    buffer[0] = 'a';
    console.log(buffer.toString()); // ��呵
    ```

## Buffer.prototype.write(string, offset, length, encoding)
默认长度是内容长度
默认编码格式utf8

```js
var buffer = new Buffer(12);
//呵呵哈哈
buffer.write('呵呵', 0, 6, 'utf8');
console.log(buffer);                    // <Buffer e5 91 b5 e5 91 b5 00 00 80 8c 2c 2b>
console.log(buffer.toString());         // 呵呵  ��,+
buffer.write('哈哈', 6, 6, 'utf8');
console.log(buffer);                    // <Buffer e5 91 b5 e5 91 b5 e5 93 88 e5 93 88>
console.log(buffer.toString());         // 呵呵哈哈
```

## Buffer.prototype.copy(targetBuffer, targetStart, sourceStart, sourceEnd)
将n个小buffer粘贴到buffer上
```js
var buffer = new Buffer(9);
var buf1 = new Buffer('一二三');
var buf2 = new Buffer('四五六');
 buf1.copy(buffer, 0, 0, 6);   //复制 一二
buf2.copy(buffer, 6, 3, 6);  //复制 五
console.log(buffer.toString());  // 一二五
```

## Buffer.concat(list, totalLength)
连接Buffer
```js
var buf1 = new Buffer('一二');
var buf2 = new Buffer('三四五');
var newBuffer = Buffer.concat([buf1, buf2], 9);
console.log(newBuffer);
console.log(newBuffer.toString());  // 一二三
```

自己实现concat
```js
Buffer.myConcat = function(list, totalLength) {
    if(typeof totalLength == 'undefined') {
        totalLength = 0;
        list.forEach(function (buf) {
            totalLength += buf.length;
        });
    }
    var buffer = new Buffer(totalLength);
    var index = 0;
    list.forEach(function (buf) {
        buf.copy(buffer, index);
        index += buf.length;
    });
    return buffer.slice(0, index);
};

var buf1 = new Buffer('一二');
var buf2 = new Buffer('三四五');
var newBuffer = Buffer.myConcat([buf1, buf2]);
var newBuffer2 = Buffer.myConcat([buf1, buf2], 12);
console.log(newBuffer);             // <Buffer e4 b8 80 e4 ba 8c e4 b8 89 e5 9b 9b e4 ba 94>
console.log(newBuffer.toString());  // 一二三四五
console.log(newBuffer2);            // <Buffer e4 b8 80 e4 ba 8c e4 b8 89 e5 9b 9b>
console.log(newBuffer2.toString()); // 一二三四
```

## Buffer.isBuffer()

```js
console.log(Buffer.isBuffer(new Buffer(1)));  // true
console.log(Buffer.isBuffer(NaN));            // false
console.log(Buffer.isBuffer('aaa'));          // false
```