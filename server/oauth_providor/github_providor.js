const { apiToken, githubToken } = require('./axios_instance')

class GithubOAuth2 {
  constructor(githubCode) {
    this.code = githubCode
    this.token = null
  }

  async getGithubToken() {
    await githubToken
      .post(null, {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_SECRET_KEY,
        code: this.code,
      })
      .then(res => (this.token = res.data))
      .catch(e => e.message)
  }

  async getApiToken() {
    await this.getGithubToken().then(async _ => {
      await apiToken
        .post(null, {
          grant_type: 'convert_token',
          client_id: process.env.API_KEY,
          client_secret: process.env.API_SECRET,
          token: this.token.access_token,
          backend: 'github',
        })
        .then(res => {
          this.token = res.data
        })
        .catch(e => e.message)
    })
    return this.token
  }

  async authentication() {
    await this.getApiToken().then(res => (this.token = res))
    return this.token
  }
}

module.exports = { GithubOAuth: new GithubOAuth2() }
