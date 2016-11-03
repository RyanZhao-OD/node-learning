var module_cache = require('./cache.js');
var module_cache = require('./cache.js'); //require多次引用同一个模块不会被重复加载

 console.log(require.cache);    //缓存对象
// console.log(require.resolve('./cache.js'));    //构建绝对路径路径

//删除缓存
//构建一个绝对路径，通过路径去对象中查找，删除掉对应的模块

//delete require.cache[require.resolve('./cache.js')];