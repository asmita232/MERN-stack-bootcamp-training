

function push(array:number[], arg2: (number | number[])): number[] {

    if(typeof(arg2) === 'number') {
        array.push(arg2)
    }

    if(typeof(arg2) === 'object') {

        array.forEach(elem => {
            array.push(elem)
        })
    }
    return array
}

console.log(push([1, 2, 3], 1))
console.log(push([1, 2, 3], [2, 3]))