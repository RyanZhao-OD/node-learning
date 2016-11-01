##util是node自带的核心包，不需要安装直接require即可
```js
var util = require('util');
```

##方法
* 继承
```js
util.inherits(Child, Parent)
```
* 解析
```js
util.inspect()   // console.dir默认调用的方法
```

* 检测数据类型
```js
util.isArray([]);
util.isBoolean([]);
util.isDate(new Date());
```
