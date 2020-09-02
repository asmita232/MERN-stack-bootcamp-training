type marry = (obj: Person ) => Person

interface Person {
    name: string,
    marry? : marry
}

let John: Person = {
    name:  "John"
}

let Jane: Person = {
    name: "Jane"
}

John.marry(Jane)

export {}