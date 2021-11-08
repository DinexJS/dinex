const test = (name , callback)=>{
    let passed = callback===true ? true : false;
    console.log(`${name} test : ${passed}`);
}
const expect = (a)=>{
    return {
        toBe: (b)=>{
        if (typeof a === "object" && a !== null){
            return JSON.stringify(a) === JSON.stringify(b)
        }else{
            return a === b
        }
    }
}
}
module.exports = {test,expect}