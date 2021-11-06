function findFileName() {
    let fs = require('fs');
    let path = require('path');
    let filename = path.basename(__filename);
    return filename;
}
const test = (name , callback)=>{
    console.log(`${name} test`);
    callback();
}
module.exports = {
    findFileName,
    test
}