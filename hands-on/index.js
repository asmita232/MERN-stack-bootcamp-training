const express = require('express')
const homeRouter = require('./routes/home')
const path = require('path')

const app = express()


app.use('/', homeRouter)
app.use('views', path.join(__dirname,'views'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

    console.log(`Server is running at ${PORT}`)
})
