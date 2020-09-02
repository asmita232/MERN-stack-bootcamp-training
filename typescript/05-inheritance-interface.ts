interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    talktime: number,
    role: string,
    dept: string
}

let John: Employee = {
    name: "John",
    age: 20,
    talktime: 300,
    role: 'senior manager',
    dept: "N&IT"
}
export{}