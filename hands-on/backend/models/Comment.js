const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true
    },
    title: String,
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        value: (new Date).toDateString(),
        required: true 
    }
})

mongoose.model('Comment', commentSchema)
module.exports = commentSchema
