/* eslint-disable camelcase */
import React, {
  useState,
  createContext,
  useEffect,
  //  useContext
} from 'react'
import Cookies from 'js-cookie'
// import { IsLoggedInContext } from './IsLoggedInContext'
// import jwt_decode from 'jwt-decode'
import axios from 'axios'
export const UserDataContext = createContext()
const UserDataContextProvider = ({ children }) => {
  // const [userData, setUserData] = useState({})
  const [authTokens, setAuthTokens] = useState({})
  const [isRenderd, setIsRendered] = useState(false)
  // const { setIsLoggedIn } = useContext(IsLoggedInContext)

  // useEffect(() => {
  //   if (isRenderd) {
  //     updateToken()
  //   } else {
  //     setIsRendered(true)
  //   }
  // }, [])

  useEffect(() => {
    if (Cookies.get('refresh_token') && Cookies.get('access_token') && JSON.parse(Cookies.get('user_data'))) {
      setAuthTokens({
        accessToken: Cookies.get('access_token'),
        refreshToken: Cookies.get('refresh_token'),
      })
      if (Cookies.get('user_name') !== 'null') {
        async function getUserData() {
          const userData = await axios.get('http://localhost/api/v1/user/' + Cookies.get('user_name'))
          Cookies.set('user_data', JSON.stringify(userData.data))
        }
        getUserData()
      }
    }
  }, [])

  useEffect(() => {
    if (isRenderd) {
      Cookies.set('access_token', authTokens.accessToken)
      Cookies.set('refresh_token', authTokens.refreshToken)
    } else {
      setIsRendered(true)
    }
  }, [authTokens])

  // const updateToken = async () => {
  //   const response = await axios.post('http://localhost/api/v1/auth/revoke-token/', {
  //     token: authTokens.refreshToken,
  //   })

  //   if (response.status === 200) {
  //     setAuthTokens(pre => {
  //       return {
  //         ...pre,
  //         access_token: response.data.access,
  //       }
  //     })
  //   } else {
  //     setIsLoggedIn(false)
  //     setAuthTokens({ refreshToken: null, accessToken: null })
  //   }
  // }

  // useEffect(() => {
  //   if (Object.keys(authTokens).length) {
  //     const interval = setInterval(() => {
  //       updateToken()
  //     }, 100000)
  //     return () => {
  //       clearInterval(interval)
  //     }
  //   }
  // }, [authTokens])

  return (
    <UserDataContext.Provider
      value={{
        //  userData, setUserData
        setAuthTokens,
        authTokens,
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}
export default UserDataContextProvider
