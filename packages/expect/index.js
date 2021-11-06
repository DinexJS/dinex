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