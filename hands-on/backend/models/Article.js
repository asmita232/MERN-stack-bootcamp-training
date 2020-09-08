const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
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
    }
})
mongoose.model('Article', articleSchema)