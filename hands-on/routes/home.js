const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    res.render()
    res.send('This is home router')
})

module.exports = router