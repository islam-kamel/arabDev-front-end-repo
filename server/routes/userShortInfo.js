const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Get Short User Info')
})

module.exports = router
