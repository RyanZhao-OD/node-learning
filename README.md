![profile](resource/profile.png)
##模块化
- cmd: seajs  
- amd: requirejs 
- Commonjs

## 同步和异步

## 阻塞和非阻塞
> 非阻塞是异步的前置条件

## io
## 单线程和多线程

## 事件循环
> 管理异步动作、定时器和回调函数的机制叫事件环
> 异步的时候就会压入到这个队列，然后不停读取事件，事件发生后回把对应的回调函数加入队列
> 队列按加入的顺序
> 
> 小本的概念

## 模块
- 核心模块
- 文件模块
- 第三方模块

## require对象
require多次引用同一个模块不会被重复加载
require是同步的

- 缓存对象 require.cache
```js
{ 'H:\04.learning\node-learning\module\test-cache.js': 
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'H:\\04.learning\\node-learning\\module\\test-cache.js',
     loaded: false,
     children: [ [Object] ],
     paths: 
      [ 'H:\\04.learning\\node-learning\\module\\node_modules',
        'H:\\04.learning\\node-learning\\node_modules',
        'H:\\04.learning\\node_modules',
        'H:\\node_modules' ] },
  'H:\04.learning\node-learning\module\cache.js': 
   Module {
     id: 'H:\\04.learning\\node-learning\\module\\cache.js',
     exports: {},
     parent: 
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: 'H:\\04.learning\\node-learning\\module\\test-cache.js',
        loaded: false,
        children: [Object],
        paths: [Object] },
     filename: 'H:\\04.learning\\node-learning\\module\\cache.js',
     loaded: true,
     children: [],
     paths: 
      [ 'H:\\04.learning\\node-learning\\module\\node_modules',
        'H:\\04.learning\\node-learning\\node_modules',
        'H:\\04.learning\\node_modules',
        'H:\\node_modules' ] } }
```

- 构建绝对路径
```js
require.resolve('./cache.js');    // H:\04.learning\node-learning\module\cache.js
```

- 删除缓存对象
```js
delete require.cache[require.resolve('./cache.js')];
```