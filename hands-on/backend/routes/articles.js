const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Article = mongoose.model('Article')
const ArticleWithComments = mongoose.model('ArticleWithComments')

const router = express.Router()

router.get( '/', ( req, res, next ) => {

    const query = req.query
    console.log(query)
    if(query && query.include === 'comments') {
        ArticleWithComments
        .find()
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

           return res.status( 200 ).json( results );
        });
    }
    Article
        .find()
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

           return res.status( 200 ).json( results );
        });
});

router.get( '/:id', ( req, res, next ) => {

    const id = req.params.id
    Article
        .findById(id)
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

           return res.status( 200 ).json( results );
        });

    // res.send( 'I will send products' );
});

router.post( '/', ( req, res, next ) => {
    console.log(req)
    const article = req.body;
    // return res.send(article)
    console.log(article)
    if( !article ) {
        const err = new Error( 'Article details should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Article
        .create( article, ( err, newArticle ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( newArticle );
        });
});

router.post( '/:id/comment', ( req, res, next ) => {
    console.log(req.path)
    const article = req.body;
    // return res.send(article)
    console.log(article)
    if( !article ) {
        const err = new Error( 'Article details should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Article
        .create( article, ( err, newArticle ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( newArticle );
        });
});

router.patch( '/:id', ( req, res, next ) => {
    const id = req.params.id;
    const article = req.body;

    if( !article ) {
        const err = new Error( 'article details should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Article
        .findByIdAndUpdate( id, { $set: article } )
        .exec(( err, oldArticle, updatedArticle ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( oldArticle );
        });
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id;

    Article
        .findByIdAndRemove( id )
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 204 ).send( '' );
        });
});


module.exports = router