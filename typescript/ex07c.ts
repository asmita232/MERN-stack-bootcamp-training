function hireCar(endDate: Date, carType:('hatchback' | 'sedan' | 'suv')= 'sedan', startDate?: Date): object {
    let booking = {
        price: 250000,
        driverName: "john",
        endDate,
        carType,
        startDate : (startDate?startDate: (new Date).getDate()) 
    }

    return booking
   
}

console.log(hireCar(new Date(), 'sedan', new Date()))
console.log(hireCar(new Date(), 'hatchback'))
