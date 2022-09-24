/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import LoginGithub from 'react-login-github'
import axios from 'axios'
import './SignIn.css'
import CreateButton from 'buttons/CreateButton'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
const CreateIcon = ({ path, alt }) => {
  return <img src={path} alt={`${alt ? `${alt}` : 'arabians'}-icon`} />
}
// const onFailure = response => console.error(response);

const GetAccessToken = async (response) => {
  await axiosInstance
    .get('/github/callback', {
      params: {
        code: response.code,
      },
    })
    .then((res) => {
      return res
    })
    .then((res) => {
      axios
        .get(
          'http://localhost:3001/github/token',
          {
            params: {
              github_token: res.data.access_token,
            },
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res.headers, res.data, res.headers)
          axiosInstance.get('/well_done', {
            params: {
              access_token: res.data.access_token,
              expires_in: res.data.expires_in,
            },
          })
        })
    })

  // axios.get(`http://localhost:3001/github/callback`, {params:{code: response.code}}, { headers: { Accept: 'application/json', 'Content-Type': 'application/json',}})

  // .then(res => {
  //     axios.get('http://localhost:3001/github/token', {params:{github_token: res.data.access_token}}, { headers: { Accept: 'application/json', 'Content-Type': 'application/json',}})
  //     .then(res => {console.log(res.headers, res.data, res.headers)})
  // })
  // .catch(err => console.log(err))
}

function GithubButton({ icon }) {
  const [data, setDate] = useState()

  const sayHello = () => {
    console.log('hello')
  }

  return (
    <CreateButton
      text="hello"
      className="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"
      icon={faGithub}
      withIcon={true}
      fontAwesomeIcon={true}
      onClick={sayHello}
    />

    // {/*// <CreateButton*/}
    // {/*//   text="Continue With GitHub"*/}
    // {/*//   tailwindStyles="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"*/}
    // {/*// >*/}
    // {/*// </CreateButton>*/}
    // {/*// <LoginGithub clientId={process.env.GITHUB_CLIENT_ID}*/}
    // {/*//     // scope="read:user"*/}
    // {/*//     className="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"*/}
    // {/*//     buttonText={icon ? CreateIcon({path: icon, alt:'github'}) :<FontAwesomeIcon icon={faGithub}/>}*/}
    // {/*//     onSuccess={GetAccessToken}*/}
    // {/*//     // onFailure={onFailure}*/}
    // {/*// />*/}
  )
}

const GoogleButton = () => {
  return 'google'
}

export { GithubButton, GoogleButton }
