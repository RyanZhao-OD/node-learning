![profile](resource/profile.png)
## node的event loop
![profile](resource/event-loop-node.png)
> Node.js也是单线程的Event Loop，但是它的运行机制不同于浏览器环境。Node.js的运行机制如下。
（1）V8引擎解析JavaScript脚本。
（2）解析后的代码，调用Node API。
（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
（4）V8引擎再将结果返回给用户。

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
