//event.js文件
/*
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
    console.log('some_event事件触发');
});
setTimeout(function(){
    event.emit('some_event');
}, 1000);
*/
/*

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
   console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1参数', 'arg2参数');
*/

/*var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function listener1(){
    console.log('监听器listener1执行。');
};

//监听器 #2
var listener2 = function listener2(){
    console.log('监听器listener2执行。');
};

//绑定 connection事件，处理函数为listener1
eventEmitter.addListener('connection', listener1);

//绑定 connection事件，处理函数为listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器事件。");

//处理connection事件
eventEmitter.emit('connection');

//移除绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1不再受监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器事件。");

console.log('End');
*/

/*
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
*/





