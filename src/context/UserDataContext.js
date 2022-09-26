/* eslint-disable camelcase */
import React, { useState, createContext, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
export const UserDataContext = createContext()
const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [authTokens, setAuthTokens] = useState({})
  const [isRenderd, setIsRendered] = useState(false)

  useEffect(() => {
    if (isRenderd) {
      updateToken()
    } else {
      setIsRendered(true)
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('userData') && localStorage.getItem('authTokens')) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
      setAuthTokens(JSON.parse(localStorage.getItem('authTokens')))
    }
  }, [])

  useEffect(() => {
    if (isRenderd) {
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('authTokens', JSON.stringify(authTokens))
    } else {
      setIsRendered(true)
    }
  }, [userData, authTokens])

  const updateToken = async () => {
    const response = await axios.post('http://localhost/api/v1/user/token/refresh', {
      refresh: authTokens.refresh,
    })

    if (response.status === 200) {
      setAuthTokens(pre => {
        return {
          ...pre,
          access: response.data.access,
        }
      })
      setUserData(jwt_decode(response.data.access))
    }
  }

  useEffect(() => {
    if (Object.keys(authTokens).length) {
      const interval = setInterval(() => {
        updateToken()
      }, 100000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [authTokens])

  return (
    <UserDataContext.Provider value={{ userData, setUserData, setAuthTokens, authTokens }}>
      {children}
    </UserDataContext.Provider>
  )
}
export default UserDataContextProvider
