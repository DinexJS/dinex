# Dinex.JS
![logo](https://user-images.githubusercontent.com/74927578/140618927-02b38c68-9661-42eb-948b-0510c4f18ebf.png)

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
    return expect(add(1,2)).toEqual(3)
})
```
Result:
```
Test 1+2 should equal to 3 passed
```
