export const expect = (a)=>{
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
