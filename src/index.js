import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import IsLoggedInContextProvider from './context/IsLoggedInContext'
import SavedPostsContextProvider from './context/SavedPostsContext'
import UserDataContextProvider from './context/UserDataContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <IsLoggedInContextProvider>
            <SavedPostsContextProvider>
                <UserDataContextProvider>
                    <App />
                </UserDataContextProvider>
            </SavedPostsContextProvider>
        </IsLoggedInContextProvider>
    </React.StrictMode>
)
