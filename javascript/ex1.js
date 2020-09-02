function sum(...arr){
    let sum = 0
    arr.forEach((val) => {
        sum += val
    })
    console.log(sum)
    return sum
}

sum(1, 2, 3, 4)
