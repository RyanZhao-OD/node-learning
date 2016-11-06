##util是node自带的核心包，不需要安装直接require即可
```js
var util = require('util');
```

##方法
- 继承

```js
util.inherits(Child, Parent)
```

实现如下:

```js
exports.inherits = function(ctor, superCtor) {

  if (ctor === undefined || ctor === null)
    throw new TypeError('The constructor to "inherits" must not be ' +
                        'null or undefined');

  if (superCtor === undefined || superCtor === null)
    throw new TypeError('The super constructor to "inherits" must not ' +
                        'be null or undefined');

  if (superCtor.prototype === undefined)
    throw new TypeError('The super constructor to "inherits" must ' +
                        'have a prototype');

  ctor.super_ = superCtor;
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
};
```

- 解析
```js
util.inspect()   // console.dir默认调用的方法
```

- 检测数据类型
```js
util.isArray([]);
util.isBoolean([]);
util.isDate(new Date());
```
