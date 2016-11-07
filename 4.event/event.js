function EventEmitter() {
    this._events = {};
}

EventEmitter.prototype.once = function (eventName, callback) {
    var onceCallback = function tempFunc() {
        callback.apply(this, arguments);
        this.removeListener(eventName, tempFunc);
    };
    onceCallback.g = callback;
    this.on(eventName, onceCallback);
};

EventEmitter.prototype.on = function (eventName, callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};

EventEmitter.prototype.removeListener = function (eventName, callback) {
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return (item !== callback) && (item.g !== callback);
    });
};
EventEmitter.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    // var that = this;
    // this._events[eventName].forEach(function (item) {
    //     item.apply(that,args);
    // });
    this._events[eventName].forEach((item) => {
        item.apply(this, args);
    });
};

let event = new EventEmitter();
const HUNGRY = 'hungry';

function eat(who) {
    console.log(who + '吃饭');
}


event.once(HUNGRY, eat);

event.emit(HUNGRY, '我');
event.emit(HUNGRY, '我');