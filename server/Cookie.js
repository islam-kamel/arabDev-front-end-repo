function getDate(time) {
  const date = new Date(Date.now() + parseInt(time))
  return date
}

function setAccessTokenInCookie(accessToken) {
  document.cookie = `access_token=${
    accessToken.access_token
  }; expires=${getDate(accessToken.expires_in)}; HttpOnly; SameSite=Lax; Secure`
}

module.exports = setAccessTokenInCookie
