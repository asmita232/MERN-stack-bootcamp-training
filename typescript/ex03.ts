function contains(array:(number | string | boolean) [], key ) {
    for(let i: number = 0; i < array.length; i++) {
        if(array[i] === key ) 
            return true
    }
    return false
}

contains([1, "hello"], 2)