export function getDate(time) {
  const date = new Date(Date.now() + time)
  return date.toUTCString()
}

export function setAccessTokenInCookie(accessToken) {
  document.cookie = `access_token=${
    accessToken.access_token
  }; expires=${getDate(accessToken.expires_in)}; SameSite=Lax; Secure`
}

export function getCookie() {}
