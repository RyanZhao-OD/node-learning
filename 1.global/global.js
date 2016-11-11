// console.log(this);              // {}, 在文件中this不是global对象
// console.log(module.exports);    // {}
// console.log(exports);           // {}
//
//
// (function () {
//     console.log(this); //闭包中的this都是全局对象
// })();
//
//
// var a = 100;
// console.log(global.a);  // undefined 直接var的变量不会直接挂在global上

// global对象  在任何地方都能访问

// console.log(__dirname);
// console.log(__filename);
// console.log(exports);
// console.log(module);
// console.log(require);

console.log(global.process.argv);
console.log(process.cwd()); //在哪里执行(可变)
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);


