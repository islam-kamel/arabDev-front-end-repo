import React from 'react'
import './SignIn.css'

const SignIn = ({ operation, website, img }) => {
    return (
        <button
            type="button"
            className="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"
        >
            <img src={img} alt={`${website}-icon`} />
            {operation} with {website}
        </button>
    )
}

export default SignIn
