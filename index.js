function findFileName() {
    let path = require('path');
    let filename = path.basename(__filename);
    return filename;
}
const test = (name , callback)=>{
    console.log(`${name} test`);
    callback();
}
const expect = (a)=>{
    return {
        toEqual: (b)=>{
        if (typeof a === "object" && a !== null){
            return JSON.stringify(a) === JSON.stringify(b)
        }else{
            return a === b
        }
    }
}
}
module.exports = {test,expect}