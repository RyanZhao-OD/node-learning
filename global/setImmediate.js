//setImmediate是一个异步方法，并且后面不能指定时间

// setImmediate(function () {
//     console.log('setImmediate');
// });
//
// console.log('current');
//
// setTimeout(function () {
//     console.log('setTimeout');
// }, 20);
//
// //在setTimeout没有给时间的时候 setImmediate是给setTimeout一些机会的
//
// process.nextTick(function () {
//     console.log('nextTick'); //服务有两个小本 他是当前小本的底部
// });

// nextTick > setImmediate > setTimeout > io

setImmediate(function () {
    console.log('setImmediate1');
    process.nextTick(function () {
        console.log('nextTick1');
    })
});
process.nextTick(function () {
    console.log('nextTick2');
    setImmediate(function () {
        console.log('setImmediate2');
    })
});
setImmediate(function () {
    console.log('setImmediate3');
});

// nextTick2
// setImmediate1
// setImmediate3
// setImmediate2
// nextTick1