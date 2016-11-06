function EventEmitter () {
    this._events = {};
}

EventEmitter.prototype.on = function (eventName, callBack) {
    if(this._events[eventName]) {
        this._events[eventName].push(callBack);
    } else {
        this._events[eventName] = [callBack];
    }
};

EventEmitter.prototype.removeLister = function (eventName, callBack) {
    this._events[eventName].filter(function(item) {
        return item !== callBack;
    });
    return this;
};

EventEmitter.prototype.emit = function (eventName) {
    var self = this;
    var args = Array.prototype.slice(arguments, 1);
    this._events[eventName].forEach(function(item) {
        item.apply(self, args);
    });
    return this;
};
