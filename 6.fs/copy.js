const fs = require('fs');

function copy(source, target) {
    fs.readFile(source, function (error, data) {
        if(error) {
            console.log(error);
        }
        fs.writeFile(target, data, function(error) {
            console.log(error);
        });
    });
}
copy('./test/copy.txt','./test/copy1.txt');