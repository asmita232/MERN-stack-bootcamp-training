function sumArray( array: number[]): number {
    let sum: number = 0
    for(let i: number; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}