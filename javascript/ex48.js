const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
}

const copy =  {
   ...iPhone11
}

const deepCopy = {
    name,
    manufacturer,
    price
} = iPhone11


// console.log(copy)

console.log(name, manufacturer, price)

console.log('deepcopy', deepCopy)
