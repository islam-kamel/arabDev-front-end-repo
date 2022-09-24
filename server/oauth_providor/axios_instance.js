const axios = require('axios')

const githubToken = axios.create({
  baseURL: process.env.GITHUB_GET_ACCESS_TOKEN_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const apiToken = axios.create({
  baseURL: process.env.API_CONVERT_TOKEN_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

module.exports = { apiToken, githubToken }
