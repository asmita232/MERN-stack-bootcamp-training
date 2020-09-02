interface IPerson {
    name: string,
    age: number
}

//any property inherited from interface must be public in class
class Person implements IPerson {

    public name: string
    public age: number
    private aadhar: string
    constructor(name: string, age: number, aadhar: string) {
        this.name = name,
        this.age = age
        this.aadhar = aadhar
    }

    celebrateBirthday() {
        this.age++
    }
}

export{}