import React from 'react'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import './SignIn.css'
import CreateButton from 'buttons/CreateButton'



function GithubButton(props) {
  return (
    <CreateButton
      text="تسجيل الدخول بواسطة GitHub"
      className="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"
      icon={faGithub}
      withIcon={true}
      fontAwesomeIcon={true}
      authorization={true}
      href={`https://github.com/login/oauth/authorize?scope=read:user&client_id=${process.env.GITHUB_CLIENT_ID}`}
      onClick={props.onClick}
    />
  )
}

const GoogleButton = () => {
  return 'google'
}

export { GithubButton, GoogleButton }
