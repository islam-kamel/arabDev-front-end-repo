import React, { useState, createContext, useEffect } from 'react'

export const SavedPostsContext = createContext()
const SavedPostsContextProvider = ({ children }) => {
    const [savedPosts, setSavedPosts] = useState([])
    const [isRenderd, setIsRendered] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('savedPosts'))) {
            setSavedPosts(JSON.parse(localStorage.getItem('savedPosts')))
        }
    }, [])

    useEffect(() => {
        if (isRenderd) {
            localStorage.setItem('savedPosts', JSON.stringify(savedPosts))
        } else {
            setIsRendered(true)
        }
    }, [savedPosts])

    return (
        <SavedPostsContext.Provider value={{ setSavedPosts, savedPosts }}>
            {children}
        </SavedPostsContext.Provider>
    )
}
export default SavedPostsContextProvider
