/* eslint-disable */

process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser
require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const githubCallback = require('./routes/githubCallback')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/github/callback', githubCallback)

module.exports = app
