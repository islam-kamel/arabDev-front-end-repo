const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  // eslint-disable-next-line
  res.send('Create Post Endpoint')
  console.log(req.headers)
})

module.exports = router
