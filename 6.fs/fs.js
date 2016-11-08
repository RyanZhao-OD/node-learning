const fs = require('fs');
let data = fs.readFileSync('./test/data.txt');
console.log(data);      // <Buffer e8 bf 99 e6 98 af 64 61 74 61 2e 74 78 74>

let dataUtf8 = fs.readFileSync('./test/data.txt', 'utf8');
console.log(dataUtf8);  // 这是data.txt

// 同步才能try catch
try {
    let dataTryCatch = fs.readFileSync('./xxx.txt', 'utf8');
    console.log(dataTryCatch);
} catch (e) {
    console.log(e);
}



fs.readFile('./test/data.txt', 'utf8', function(error, data) {
    console.log(data);  // 这是data.txt
});

