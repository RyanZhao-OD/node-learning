/**
 * 引入模块需要经过3个步骤
 * 1.路径分析
 * 2.文件定位
 * 3.编译执行
 */

console.log(module.paths);


/**
 * 每个文件模块都是一个对象 定义如下
 * @param id
 * @param parent
 * @constructor
 */
function Module(id, parent) {
	this.id = id;
	this.exports = {};
	this.parent = parent;

	if (parent && parent.children) {
		parent.children.push(this);
	}

	this.filename = null;
	this.loaded = false;
	this.children = [];
}

// 查看系统中已有的拓展加载方式
console.log(require.extensions);   // { '.js': [Function], '.json': [Function], '.node': [Function] }


/**
 * js文件模块的编译(.js文件)
 * node对获取js文件内容头尾包装
 */
(function (exports, require, module, __filename, __dirname) {
	var math = require('math');
	exports.area = function (radius) {
		return math.PI * radius * radius;
	};
});

/**
 * 每个模块文件都进行了作用域隔离，包装之后的代码会通过vm原生模块的runInThisContext()方法执行，返回一个具体的function对象
 * 最后，将当前模块对象的exports属性、require()方法、module(模块对象自身),
 * 以及在文件定位中得到的完整文件路径和文件目录作为参数给这个function执行
 */
const vm = require('vm');
console.log(vm.runInThisContext);

/**
 * 对C/C++模块的编译(.node文件)
 * node调用process.dlopen()方法进行加载和执行。
 * 在Node的架构下dlopen()方法在windows合*nix平台下有不同的实现，通过libuv兼容层进行了封装
 */
console.log(process.dlopen);

/**
 * 对JSON文件的编译(.json文件)
 * fs模块同步读取，然后JSON.parse()得到对象，然后赋值给module.exports
 * 在Node的架构下dlopen()方法在windows合*nix平台下有不同的实现，通过libuv兼容层进行了封装
 */


/**
 * 核心模块分2种：C/C++编写的模块(Node项目src目录下) javascript编写的(Node项目lib目录下)
 * 编译成可执行文件过程中被编译成了二进制文件
 * 
 */