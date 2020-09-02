
function exponentFactory(num: number): Function | null {
    if(num === 2)
        return square

    else if(num === 3)
        return cube
    
    return null

        function square(num: number): number {
            return num * num
        }
        
        function cube(params:number): number {
            return params * params * params
        }
}

let fn: Function = exponentFactory(2)
console.log(fn(10))

export{}