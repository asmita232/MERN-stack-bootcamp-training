const mongoose = require('mongoose')
//create models
require('../model/Product')
mongoose.connect('mongodb://mongodb/mystore', { useNewUrlParser: true })

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:')) 

connection.on('open', function() {
    console.log('connected to mongodb database')
})

// mongoose.model