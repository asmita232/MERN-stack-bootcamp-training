function max(...array) {
    let max = 0
    array.forEach((val) => {
        if(val > max) {
            max = val
        }
    })
    return max
}


console.log(max(200, 200, 500))
console.log(max(200, 300, 500, 1000, 300))