import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faGithub, faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { IsLoggedInContext } from '../../context/IsLoggedInContext'
import Rightside from './Rightside'
import { useNavigate } from 'react-router-dom'
import HomePost from '../Home/HomePost'

const Profile = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext)
  const navigate = useNavigate()
  const [isRendered, setIsRendered] = useState(false)
  useEffect(() => {
    if (isRendered) {
      if (!isLoggedIn) {
        navigate('/login')
      }
    } else {
      setIsRendered(true)
    }
  })

  return (
    <div className="back">
      <Container className="">
        <div className="mt-[35px] w-fit mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9HluZ0LFmY4x3AsIe537Tr9AHWMCxhH96a381hNb&s"
            className="rounded-[100%] border-4 border-white w-[140px] h-[140px] m-0"
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="text-center font-bold text-4xl my-3">cancoble</h1>
          <p className="text-center text-slate-600">
            Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯
          </p>
          <div>
            <p className="text-center">Joined on Apr 23, 2019</p>
            <div className="flex gap-7 mb-3 sm:flex-col items-center justify-center">
              <a href="#" className="text-center flex gap-2 items-center text-blue-700 font-semibold   ">
                <FontAwesomeIcon icon={faFacebookMessenger} />
                hi@madza.dev
              </a>
              <a href="#" className="text-center flex gap-2 items-center text-blue-700 font-semibold   ">
                <FontAwesomeIcon icon={faMarkdown} />
                https://madza.dev
              </a>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faFacebookMessenger} />
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
        <div className="container sm:p-1 text-center">
          <div className="flex gap-4 flex-wrap">
            <div className=" ">
              <Rightside />
            </div>
            <div className="flex-1 mx-auto">
              <HomePost />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
