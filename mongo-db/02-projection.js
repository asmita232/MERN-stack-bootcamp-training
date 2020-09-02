const { Db } = require("mongodb");
for(i = 0; i < 100; i++) {
    db.testData.insertOne({
        name: `${i}-product`,
        price: Math.random()*10
    })
}

// db.testData.insertOne