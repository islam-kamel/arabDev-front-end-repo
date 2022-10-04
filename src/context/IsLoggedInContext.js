import React, { useState, createContext, useEffect } from 'react'
import Cookies from 'js-cookie'
export const IsLoggedInContext = createContext()

export const IsLoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isRenderd, setIsRendered] = useState(false)

  useEffect(() => {
    if (Cookies.get('logged_in')) {
      setIsLoggedIn(JSON.parse(Cookies.get('logged_in')))
      console.log(JSON.parse(Cookies.get('logged_in')))
    }
  }, [])

  useEffect(() => {
    if (isRenderd) {
      Cookies.set('logged_in', JSON.stringify(isLoggedIn))
    } else {
      setIsRendered(true)
    }
  }, [isLoggedIn])

  return <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</IsLoggedInContext.Provider>
}
export default IsLoggedInContextProvider
