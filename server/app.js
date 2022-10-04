/* eslint-disable */

process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser
require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
// const rateLimit = require('express-rate-limit')

const githubCallback = require('./routes/githubCallback')
const nativeUserAuth = require('./routes/nativeUserAuth')
const createPost = require('./routes/createPost')
const userShortInfo = require('./routes/userShortInfo')

const app = express()

// app.use(
//   rateLimit({
//     windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
//     max: 5,
//     message: 'You exceeded 100 requests in 12 hour limit!',
//     headers: true,
//   })
// )

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/github/callback', githubCallback)
app.use('/auth/native', nativeUserAuth)
app.use('/feed/create', createPost)
app.use('/user/short', userShortInfo)

module.exports = app
