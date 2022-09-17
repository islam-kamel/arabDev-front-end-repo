import React from 'react'
import Scotch from './Scotch'
import './Style.css'
import user from './User-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookMessenger,
    faReact,
    faHackerrank,
} from '@fortawesome/free-brands-svg-icons'
/**
 * Our React component where we display data
 * -----------------------------
 */
function Addpost() {
    return (
        <div className="App pt-2">
            {/* Iterate over imported array in userData */}
            <div className="users">
                {/* Display each data in array in a card */}
                {/* Each card must have a 'key' attribute */}
                {user.map((user, index) => {
                    return (
                        <div
                            className="container bg-white bor-post"
                            key={index}
                        >
                            {/* <img src="" alt="photo profile"/> */}
                            <p className="content d-flex">{user.name}</p>
                            <h3 className="heading">{user.tiatl}</h3>
                            <p className="content">{user.content}</p>
                            <p className="content hash">{user.hashtag[2]}</p>
                            <div className="container d-flex cont-reaction ">
                                <p className="content">
                                    <FontAwesomeIcon icon={faReact} />
                                    {user.react}
                                </p>
                                <p className="content">
                                    <FontAwesomeIcon
                                        icon={faFacebookMessenger}
                                    />
                                    {user.comment}
                                </p>
                                <h6 className="content">
                                    <FontAwesomeIcon icon={faHackerrank} />
                                    {user.save}
                                </h6>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Scotch />
        </div>
    )
}
export default Addpost
