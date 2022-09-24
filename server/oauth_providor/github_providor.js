const axios = require('axios')

class GithubOAuth2 {
  constructor(githubCode) {
    this.code = githubCode
    this.token = null
  }

  async getGithubToken() {
    await axios
      .post(
        process.env.GITHUB_GET_ACCESS_TOKEN_URL,
        {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_SECRET_KEY,
          code: this.code,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        this.token = res.data
      })
      .catch(err => {
        console.error(err.toJSON())
      })

    return this.getApiToken()
  }

  async getApiToken() {
    await axios
      .post(
        process.env.API_CONVERT_TOKEN_URL,
        {
          grant_type: 'convert_token',
          client_id: process.env.API_KEY,
          client_secret: process.env.API_SECRET,
          token: this.token.access_token,
          backend: 'github',
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        this.token = res.data
      })
      .catch(err => {
        console.error(err.toJSON())
      })

    return this.token
  }
}

module.exports = { GithubOAuth: new GithubOAuth2() }
