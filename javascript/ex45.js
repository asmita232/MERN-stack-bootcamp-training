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
        // console.log(`this of ccaldis ${this}`)
        return(  this.price * ( 100 - percentage ) / 100) ;
    }
}

function printPhoneDetails({manufacturer, name}, calculateDiscoutedPrice) {
   let discountedPrice = calculateDiscoutedPrice(10)
   console.log(`${manufacturer} ${name} is available at price $${discountedPrice}`)
}

const calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 ) 
printPhoneDetails(iPhone11, calculateDiscoutedPrice)