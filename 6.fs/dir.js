const fs = require('fs');
//创建目录
// fs.mkdirSync('a/b/c/d');  //如果目录a、b、c不存在，则报错
//如果目录a、b、c不存在，则报错
// fs.mkdir('./a/b/c/d', function(error) {
//     console.log(error);
// });


// function myMakedirSync(dir) {
//     var arr = dir.split('/');
//     var path;
//     for (var i = 0; i < arr.length; i++) {
//         path = arr.slice(0, i + 1).join('/');
//         if(!fs.existsSync(path)) {
//             fs.mkdirSync(path);
//         }
//     }
// }
//
// myMakedirSync('./a/b/c/d');


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
// makep('a/b/c/d');

fs.exists('./a/b/c', function(exists) {   //没有error参数

});