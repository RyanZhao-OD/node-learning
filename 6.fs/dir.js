var fs = require('fs');
//创建目录
// fs.mkdirSync('a/b/c/d');  //如果目录a、b、c不存在，则报错

// console.log('a/b/c/d');
// fs.mkdir();


// p 'a/b/c/d'
// arr ['a','b', 'c' , 'd']
// path a   ['a']
// path a/b  ['a', 'b']
// path a/b/c  ['a', 'b', 'c']
// path a/b/c/d  ['a', 'b', 'c', 'd']

function makepSync(p) {
    var arr = p.split('/');
    var path;
    for (var i = 0; i < arr.length; i++) {
        path = arr.slice(0, i + 1).join('/');
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
}

// makepSync('a/b/c/d');
// function makep
var isFinished = false;
function makep(p) {
    if(isFinished) {
        return;
    }
    var arr = p.split('/');
    var path = arr[0];
    fs.exists(path, function (exits) {

        console.log(exits);
        if(!exits) {
            fs.mkdir(path, function() {
                makep(arr.slice(1).join('/'));
            });

        } else {
            isFinished = true;
        }
    });
}
makep('a/b/c/d');

// fs.exists('testdir', function(exists) {   //没有error参数
//
// });