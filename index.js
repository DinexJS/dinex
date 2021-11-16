const test = (name , callback)=>{
    let passed = "failed";
    if (callback()===true){
        passed = "passed";
    }
    console.log(`${name} test : ${passed}`);
}
const expect = (a)=>{
    return {
        toBe: (b)=> {
            if (typeof a === "object" && a !== null){
                return JSON.stringify(a) === JSON.stringify(b)
            }else{
                return a === b
            }
        }
    }
}

function not(state){
    return !state;
}

module.exports = {test,expect}
