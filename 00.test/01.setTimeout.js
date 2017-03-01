/**
 * unref()、ref()方法只有node中才有
 */
let setTimeoutTimer = setTimeout(function () {
	console.log('setTimeout');
}, 1000);

setTimeoutTimer.unref();
setTimeoutTimer.ref();

let setIntervalTimer = setInterval(function () {
	console.log('setInterval');
}, 1000);

setIntervalTimer.unref();
setIntervalTimer.ref();