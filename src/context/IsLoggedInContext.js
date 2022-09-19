import React, { useState, createContext, useEffect } from 'react'

export const IsLoggedInContext = createContext()

export const IsLoggedInContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isRenderd, setIsRendered] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {
            setIsLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
        }
    }, [])

    useEffect(() => {
        if (isRenderd) {
            localStorage.setItem('loggedIn', JSON.stringify(isLoggedIn))
        } else {
            setIsRendered(true)
        }
    }, [isLoggedIn])

    return (
        <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </IsLoggedInContext.Provider>
    )
}
export default IsLoggedInContextProvider
