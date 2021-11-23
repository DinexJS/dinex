export const test = (name , callback)=>{
    let passed = "failed";
    if (callback()===true){
        passed = "passed";
    }
    console.log(`${name} test : ${passed}`);
    return passed;
}
