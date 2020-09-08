const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.send('in home router')
})

module.exports = router