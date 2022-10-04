const express = require('express')
const router = express.Router()
const api = require('../api/axios')

router.post('/', function (req, res, next) {
  res.send('Authentication Endpoint')
  const { username, password } = req.body

  api
    .post('/auth/token', {
      grant_type: process.env.GRANT_TYPE,
      client_id: process.env.API_ID,
      client_secret: process.env.API_SECRET,
      username,
      password,
    })
    .then(apiRes => {
      console.log(apiRes.data)
      if (apiRes.status === 200) {
        console.log(apiRes.data)
      }
    })
    .catch(e => console.log(e.message))
})

module.exports = router
