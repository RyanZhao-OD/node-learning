## node的events模块
```js
var EventEmitter = require('events');
var emitter = new EventEmitter();
```
- on 事件绑定 
- once 绑定一次 
- emit 触发时间
- removeListener() 删除事件类型上一个订阅
- removeAllListener() 删除事件类型上所有订阅
- 默认最多10个订阅 setMaxListeners()可以修改
