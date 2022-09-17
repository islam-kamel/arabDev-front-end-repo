import React from 'react'
import './Profile.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookMessenger,
    faGithub,
    faMarkdown,
} from '@fortawesome/free-brands-svg-icons'
import Addpost from '../Addposts/Addpost'
const Profile = () => {
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
                        <h1 className="text-center font-bold text-3xl">
                            cancoble
                        </h1>
                        <p className="bio">
                            Discussions. 💬 Tools. 🛠 Resources. 📚 All things
                            productivity. 🎯🚀💯
                        </p>
                        <div className="d-flex align">
                            <p className="nn">Joined on Apr 23, 2019</p>
                            <a
                                href="#"
                                className="text-center text-blue-700 font-semibold nn "
                            >
                                <FontAwesomeIcon icon={faFacebookMessenger} />
                                hi@madza.dev
                            </a>
                            <a
                                href="#"
                                className="text-center text-blue-700 font-semibold nn "
                            >
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
                        <div className="col-3">col-3</div>
                        <div className="col-9">
                            <Addpost />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile
// <div className="" key={index}>
//     <div className="">
//         <img
//             src=".."
//             className="rounded-full md:absolute top-48 inset-x-96 border-4 border-white w-40 h-40 img-profile"
//         />{user.id}
//     </div>
//     <div
//         className="flex justify-center flex-col mt-5 mb-3.5"
//         key={index}
//     >
//         <h1 className="text-center font-bold text-3xl">
//             {user.name}
//         </h1>
//         <a
//             href="#"
//             className="text-center text-blue-700 font-semibold"
//         >
//             Add Bio
//         </a>
//     </div>
// </div>

// return (
//

// )
