type square = (item: number) => number 

const Square: square= function (element) {
   return element * element
}


function map(array: number[], fun: square): number[] {
    let newArray: number[] = array.map(item => {
        return fun(item)
    })

    return newArray
}

map([1, 2, 3, 4], Square)