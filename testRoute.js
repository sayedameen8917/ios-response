const express = require('express')
const router = express.Router()
const {
    add
} = require('./testController')

router.route('/').post(add)

module.exports = router
