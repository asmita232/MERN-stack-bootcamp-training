const mongoose = require('mongoose')
const commentSchema = require('./Comment')

const articleWithCommentsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
       value: String,
        createdAt: {
            type: String,
            value: (new Date).toDateString(),
            required: true
        }
    },
    comments: [ commentSchema ]
})
mongoose.model('ArticleWithComments', articleWithCommentsSchema)