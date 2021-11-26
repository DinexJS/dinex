# Dinex.JS
![Easy JavaScript testing](https://user-images.githubusercontent.com/74927578/143604381-1b00245e-436f-452b-b22c-555e9cb09efe.png)

Dinex is an easy , simple and light javaScript library for testing.

## Installation
You can use npm to install dinex:
```bash
npm install dinex
# or use the shortcut
npm i dinex
```
## Example
Writing tests is dinex is so easy so Take a look at this examples:
```js
const {test , expect} = require("dinex")
function add (a,b){
    return a+b
}
test("1+2 should equal to 3",()=>{
    expect(add(1,2)).toEqual(3)
})
```
Result:
```
Test 1+2 should equal to 3 passed
```
