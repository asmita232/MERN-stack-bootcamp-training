function squareEach(array: number[]): number[] {

    let val: number[] = array.map(item => {

        return item * item
    })

    return val
}

let result = squareEach( [ 1, 2, 3, 4 ] );
console.log( result ); // [ 1, 4, 9, 16 ]