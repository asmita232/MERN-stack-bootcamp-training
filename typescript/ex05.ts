function isOdd(elem:number): boolean {
    
    return <boolean><unknown>(elem & 1)
}
function filter(array: number[], fun: Function): number[] {
    
    let newArray: number[]

    for(let i = 0; i < array.length; i++) {
        
        if(isOdd (array[i])) {
            newArray.push(array[i])
        }  
    }

    return newArray
}

filter([2, 3, 4, 5], isOdd)