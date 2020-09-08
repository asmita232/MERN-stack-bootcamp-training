const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Comment = mongoose.model('Comment')

const router = express.Router()

router.get('/',(req, res, next) => {

    console.log('return comment')
    res.send('comment returned')
})

router.post( '/', ( req, res, next ) => {
    console.log(req)
    const comment = req.body;
    // return res.send(article)
    console.log(comment)
    if( !comment ) {
        const err = new Error( 'comment details should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Comment
        .create( comment, ( err, newComment ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( newComment );
        });
});

module.exports = router