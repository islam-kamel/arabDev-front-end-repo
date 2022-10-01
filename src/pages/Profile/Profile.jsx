import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faGithub, faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { IsLoggedInContext } from '../../context/IsLoggedInContext'
import Rightside from './Rightside'
import { useNavigate } from 'react-router-dom'
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
      <Container className="users">
        <div className="md:relative md:rounded-bl-lg md:rounded-br-lg bg-gradient-to-b back-pro mt-4">
          {/* // cover photo */}
          <div className="">
            {/* profile photo */}
            <img
              src=""
              className="rounded-full md:absolute top-48 inset-x-96 border-4 border-white w-40 h-40 img-profile"
            />
          </div>

          {/* // INFOS */}
          <div className="flex justify-center flex-col mt-5 mb-3.5">
            <h1 className="text-center font-bold text-3xl">cancoble</h1>
            <p className="bio">Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯</p>
            <div className="d-flex align">
              <p className="nn">Joined on Apr 23, 2019</p>
              <a href="#" className="text-center text-blue-700 font-semibold nn ">
                <FontAwesomeIcon icon={faFacebookMessenger} />
                hi@madza.dev
              </a>
              <a href="#" className="text-center text-blue-700 font-semibold nn ">
                <FontAwesomeIcon icon={faMarkdown} />
                https://madza.dev
              </a>
              <p className="nn">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </p>
              <p className="nn">
                <FontAwesomeIcon icon={faGithub} />
              </p>
            </div>
          </div>
        </div>
        {/* // END INFOS */}
        {/* // TABS */}
        <div className="container text-center">
          <div className="row">
            {/* <div className="col-3">col-3</div> */}
            <div className="col-9">{/* <HomePost/> */}</div>
          </div>
        </div>
        <div className="row">
          <Rightside />
        </div>
      </Container>
    </div>
  )
}

export default Profile
