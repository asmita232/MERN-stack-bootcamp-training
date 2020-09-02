type nameObject = {
    manufacturer: string
    product: string
}
type name = string
interface IItem<T1> {
    id: number
    name: T1
    getName: () => string
}

class ItemLongName implements IItem<nameObject> {
    constructor(public name: nameObject, public id: number){
        this.name = name
        this.id = id
    }

    getName() {
        return this.name.manufacturer + this.name.product
    }
}

class ItemShortName implements IItem<name>{

    constructor(public name: name, public id: number){
        this.name = name
        this.id = id
    }
    getName() {
        return String(this.name)
    }
    
}

function printItem1 (array: IItem<name>[]) {
    console.log(array)
}

function printItem2 (array: IItem<nameObject>[]) {
    console.log(array)
}

let short = new ItemShortName('Aditya', 123)
let nameObj: nameObject = {
    manufacturer : 'Honda',
    product: "Car"
}
let long = new ItemLongName(nameObj, 23)

console.log(short)
console.log(long)

let IObj1: IItem<name> = {
    name: 'Soham',
    id: 23,
    getName() {
        return this.name
    }
}

let Iobj2: IItem<nameObject> = {
    name: {
        manufacturer: 'Soham',
        product: "car"
    }
        ,
    id: 23,
    getName() {
        return String(this.name)
    }
}

printItem1([IObj1])
printItem2([Iobj2])
export{}