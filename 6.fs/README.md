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
