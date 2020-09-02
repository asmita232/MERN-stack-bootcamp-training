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
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}

const { name, manufacturer } = iPhone11

console.log(iPhone11)
const { value } = iPhone11.specs.memory

const { rear } = iPhone11.specs.cameras

const [, color] = iPhone11.specs.availableColors

console.log( name, value, rear, color)

exports = {iPhone11}