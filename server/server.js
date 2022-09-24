/* eslint-disable */
process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser

require('dotenv').config()
const url = require('url')
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { GithubOAuth } = require('./Authentication')

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }))
app.use(cookieParser())

function getDate(time) {
  const date = new Date(Date.now() + parseInt(time))
  console.log(date)
  return date
}

app.get('/github/token', (req, res) => {
  const data = GithubOAuth.getApiToken()
  data
    .then((data) => {
      res.set('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
    .catch((err) => {
      console.error(err)
    })
})

app.get('/github/callback', (req, res) => {
  const { query } = url.parse(req.url, true)
  GithubOAuth.code = query.code
  const data = GithubOAuth.getGithubToken()
  data
    .then((data) => {
      res.send(JSON.stringify(data))
      console.log(data)
    })
    .catch((err) => console.error(err))
})

app.get('/well_done', (req, res) => {
  const { query } = url.parse(req.url, true)
  res.cookie('access_token', query.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    expires: getDate(query.expires_in),
  })
  res.redirect('http://localhost:3000')
  res.send('set cookie')
})

app.listen(3001, () => {
  console.log('server listening on port 3001')
})
