const {expect} = require("../dist/dinex.js")
let passed;
// Tests for expect

const expected = {
    a:1,
    b:"hello",
    c:13,
    d:[1,2,3],
    e:{f:14},
    g:{h:15},
}
const actual = {
    a:1,
    b:"goodbye",
    c:17,
    d:[1,2,3],
    e:{f:undefined},
    g:{h:15}
}
const returned = [
    expect(actual.a).toBe(expected.a),
    expect(actual.b).toBe(expected.b),
    expect(actual.c).toBe(expected.c),
    expect(actual.d).toBe(expected.d),
    expect(actual.e).toBe(expected.e),
    expect(actual.g).toBe(expected.g)
]
function test() {
if (JSON.stringify(returned) === JSON.stringify([true, false , false, true, false, true])){
    passed="passed";
}
else{
    passed="failed";
}
console.log(`* expect tests : ${passed}`);
if (passed==="failed") {
    console.log(returned);
    throw new Error("expect tests failed");

}

}
module.exports = test;
