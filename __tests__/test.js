const {test} = require('../dist/dinex.js');
let passed;
// test for test
const returned = [
    test('test', ()=>{
    return 1===1 //true
    }),
    test('test2', ()=>{
        return 1===3 // false
    })
]
if (returned[0]===true && returned[1]===false){
    passed = "passed";
}
else{
    passed = "failed"
}
console.log(`* test tests : ${passed}`)
if (passed==="failed") {
    console.log(returned);
    throw new Error("test failed");
}