const express = require( 'express' );
const path = require( 'path' );

const Product = require('mongoose').model('Product')

const router = express.Router();



router.get( '/', ( req, res, next ) => {
    Product
        .find() 
        .exec((error, results) => {
            if(error) {
                res.status(500)
               return  next(error)
            }
            res.status(200).send(results)

        })
});

router.get( '/:id', ( req, res, next ) => {

    const id = req.params.id
    if(!id){

    }
    // res.sendFile(  );
    res.send( 'hello' );
});
router.post( '/', ( req, res, next ) => {
    const product = req.body
    if(!product) {
        const err = new Error("Product should be included in request body")
        err.status = 403
        return next(err)
    }
    Product
        .create(product, (err, productWithId) => {
            if(err) {
                err.status = 500
                return next(err)
            }
            res.status(200).json(productWithId)
        })
    // res.send( product );
});
router.patch( '/:id', ( req, res, next ) => {

    const id = req.params.id
    const product = req.body
    if(!id) {
        const error = new Error('Id must be present')
        return next(error)
    }
    if(!product) {
        const err = new Error("Product should be included in request body")
        err.status = 400
        return next(err)
    }
    Product
        .findByIdAndUpdate(id, {$set: product})
        .exec((err, updatedProduct) => {
            if(err) {
                err.status = 500
                return next(err)
            }
            res.status(200).send(updatedProduct)
        })
    // res.sendFile(  );
    // res.send( 'hello' );
});
router.delete( '/:id', ( req, res, next ) => {
    // res.sendFile(  );
    const id = req.params.id
    Product
        .findByIdAndRemove(id)
        .exec((err, results) => {
            if(err) {
                err.status = 500
                return next(err)
            }
            res.status(204).send(results)
        })
});

module.exports = router;