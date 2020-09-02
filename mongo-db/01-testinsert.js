for(i = 0; i < 100; i++) {

    db.person.insertOne({
        name: `trial${i}`
    })
}

const cursor = db.person.find()