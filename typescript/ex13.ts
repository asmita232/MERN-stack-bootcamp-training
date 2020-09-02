
type numType = number
type stringType = string
type booleanType = boolean

function contains<T>(array: T [], key: T ): boolean {
    for(let i: number = 0; i < array.length; i++) {
        if(array[i] === key ) 
            return true
    }
    return false
}



console.log(contains<numType>([1], 2))
console.log(contains<stringType>(["hellow"], "this"))
console.log(contains<booleanType>([true, false], false))


export{}