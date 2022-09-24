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

  const data = GithubCallback.getGithubToken()
  data
    .then(data => {
      res.set('Content-Type', 'application/json')
      res.set('Accept', 'application/json')
      res.cookie('access_token', data.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        expires: getDate(data.expires_in),
      })
      res.redirect('http://localhost:3000')
    })
    .catch(err => {
      return err
    })
})

module.exports = router
