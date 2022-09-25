const express = require('express')
const router = express.Router()
const { GithubOAuth: GithubCallback } = require('../oauth_providor/github_providor')
const url = require('url')

function getDate(time) {
  const date = new Date(Date.now() + parseInt(time))
  return date
}

router.get('/', function (req, res, next) {
  // eslint-disable-next-line
  const { query } = url.parse(req.url, true)

  GithubCallback.code = query.code
  GithubCallback.authentication()
    .then(token => {
      res.set('Content-Type', 'application/json')
      res.set('Accept', 'application/json')
      res.cookie('access_token', token.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        expires: getDate(token.expires_in),
      })
      res.status(200)
      res.redirect('http://localhost:3000')
    })
    .catch(e => e.message)
})

module.exports = router
