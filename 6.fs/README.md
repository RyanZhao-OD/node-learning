## 核心模块
```js
const fs = require('fs');
```

## 读取
- 同步读取
readFile的缺点，不能读取比内存大的文件，适合读小文件（读取到内存中的）

    ```js
    let data = fs.readFileSync('./test/data.txt');
    console.log(data);      // <Buffer e8 bf 99 e6 98 af 64 61 74 61 2e 74 78 74>
    
    let dataUtf8 = fs.readFileSync('./test/data.txt', 'utf8');
    console.log(dataUtf8);  // 这是data.txt
    ```
    
    同步才能try catch
    ```js
    try {
        let dataTryCatch = fs.readFileSync('./xxx.txt', 'utf8');
        console.log(dataTryCatch);
    } catch (e) {
        console.log(e);
    }
    ```

- 异步读取
    ```js
    fs.readFile('./test/data.txt', 'utf8', function(error, data) {
        console.log(data);  // 这是data.txt
    });
    ```


## 写入文件
- 同步写入文件
先清空文件中的内容。如果文件不存在 则会先创建文件
fs.writeFileSync(path, data, options)
data:Buffer类型 默认写入格式是utf8
options:flag:'a'追加
    ```js
    fs.writeFileSync('./test/writeFile.txt', new Buffer('aaa'), {flag: 'a'});
    ```
    
- 异步写入文件
    ```js
    fs.writeFile('./test/writeFile.txt', new Buffer('呵呵哈哈aaa'), {flag: 'a'}, function (error) {
        console.log(error);
    });
    
    // appendFile相当于writeFile加了flag:a
    fs.appendFile('./test/writeFile.txt', new Buffer('呵呵哈哈aaa'), function (error) {
        console.log(error);
    });
    ```
    
## 目录
- 创建目录
    ```js
    
    fs.mkdir('./a/b/c/d', function(error) {
        console.log(error);
    });
    ```
- 判断目录是否存在
    ```js
    fs.exists('./a/b/c', function(exists) {   //没有error参数
        console.log(exists);  // true
    });
    ```
    
## stream
获取流
```js
const fs = require('fs');
let readStream = fs.createReadStream('./test/stream.txt', {highWaterMark: 1});
//highWaterMark 每次取多少 默认读取64k  64*1024
```

## 可读流对象

相当于在家里安装了一个水管，默认是非流动模式
监听on data事件将水管打开，fs会以最快的速度不定的发射 emit data事件
readStream.setEncoding('utf8');  //设置了utf8后 highWaterMark最少要给3

```js
let readStream = fs.createReadStream('./test/stream.txt', {highWaterMark: 1});
var arr = [];
readStream.on('data', function (data) {
    console.log(data); // data是Buffer对象
    arr.push(data);
});

readStream.on('end', function() {
    console.log(Buffer.concat(arr).toString());  
});

readStream.on('error', function(error) {
    console.log(error);
});

```

```js
// 每秒读取一次
let rs = fs.createReadStream('./test/stream.txt', {highWaterMark:3});
rs.setEncoding('utf8'); //设置编码格式
//如果编码格式是utf8 最小水位线就是3
var str = '';
//暂停出水 开启出水
rs.on('data',function (data) { //默认每次读取64k 是怎么读的，不停的以最快速度将内容读取到内存中
    str += data;
    console.log('出水');
    rs.pause(); //停止触发data事件
});
var timer = setInterval(function () {
    rs.resume(); //恢复触发resume事件
},1000);

rs.on('end',function () {
    console.log(str);
    clearInterval(timer);
});
```

## 可写流对象

在fs模块中使用createWriteStream方法创建一个将流数据写入文件中的WriteStream对象

```js
fs.createWriteStream(path,[options]);
/*
path 读取的文件路径
options
flags 对文件采取何种操作,默认为 'w'
encoding 指定编码，默认为null
start 用整数表示文件开始字节数的写入位置
highWaterMark 最高水位线，write()开始返回 false 的缓冲大小。缺省为 16kb
*/
```

- writeStream.on('drain', function(){})
- readStream.pipe(writeStream);