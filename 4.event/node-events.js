// node给我提供了一个自带的时间模块(核心模块)
//注释:node最大的绑定数目默认是10个超出会有异常
const EventEmitter = require('events');
let emitter = new EventEmitter();

function eat(who) {
    console.log(who + '吃东西');
}

function drink(who) {
    console.log(who + '喝东西');
}

const HUNGRY = '饿了';
const THIRSTY = '口渴了';

emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.on(HUNGRY, eat);
emitter.emit(HUNGRY, '我');
// emitter.emit(HUNGRY, '我');

// emitter.once(HUNGRY, eat);
// emitter.emit(HUNGRY, '我');
// emitter.emit(HUNGRY, '我');

// emitter.once(HUNGRY, eat);
// emitter.removeListener(HUNGRY, eat);
// emitter.emit(HUNGRY, '我');
// emitter.emit(HUNGRY, '我');

// emitter.on(HUNGRY, eat);
// emitter.on(HUNGRY, drink);
// emitter.emit(HUNGRY, '我');

// emitter.on(HUNGRY, eat);
// emitter.on(HUNGRY, drink);
// emitter.removeAllListeners(HUNGRY);
// emitter.emit(HUNGRY, '我');
