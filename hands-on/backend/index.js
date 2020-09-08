require( './data/init' );
const express  = require('express')
const homeRouter = require('./routes/home')
const articleRouter = require('./routes/articles')
const commentRouter = require('./routes/comments')

const app = express()

// app.get('/',(req, res) => {
//     res.send('Hello express')
// })


app.use( express.urlencoded() );
app.use( express.json() );

app.use(homeRouter)
app.use('/articles', articleRouter)
app.use('/comments', commentRouter)

app.use((error, req, res, next) => {
    
    res.status(error.status || 500).send(error.message)
})

const PORT = process.env.PORT || 4201
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})