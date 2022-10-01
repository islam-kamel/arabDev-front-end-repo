import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Rightside.css'
const Rightside = () => {
  return (
    <div>
      <div className="max-w-[410px]">
        <div className="list-group w-auto">
          <a href="#" className="list-group-item list-group-item-action py-3" aria-current="true">
            <div>
              <div className="text-center">
                <h6 className="head-list pb-2">Currently learning</h6>
                <p className="mb-0 opacity-75">Three.js</p>
              </div>
            </div>
          </a>
        </div>
        <div className="list-group w-auto">
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 cont" aria-current="true">
            <div className="d-flex gap-2 justify-center">
              <div>
                <h6 className="head-list pb-2">Skills/Languages</h6>
                <p className="mb-0 opacity-75">
                  React, Redux, Progressive Web App (PWA), Firebase, Electron, Flutter, TypeScript, JavaScript, Python,
                  Dart, HTML, CSS
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="list-group w-auto">
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 cont" aria-current="true">
            <div className="d-flex gap-2 w-100 justify-center">
              <div>
                <h6 className="head-list pb-2">Currently hacking on</h6>
                <p className="mb-0 opacity-75">Open Source Projects, Freelancing</p>
              </div>
            </div>
          </a>
        </div>
        <div className="list-group w-auto">
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 cont" aria-current="true">
            <div className="d-flex gap-2 w-100 justify-center">
              <div>
                <h6 className="head-list pb-2">Available for</h6>
                <p className="mb-0 opacity-75">
                  React, Web Development, Progressive Web App (PWA), Front-end development (HTML, CSS, JS), Python,
                  Flutter, Electron
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="list-group w-auto">
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 cont" aria-current="true">
            <div className="d-flex gap-2 w-100 sm:justify-center">
              <div>
                <p className="mb-2 w-full flex justify-start items-center  text-slate-600">
                  <FontAwesomeIcon className="mr-3" icon={faGithub} /> 0 posts published
                </p>
                <p className="mb-2 w-full flex justify-start  items-center  text-slate-600">
                  <FontAwesomeIcon className="mr-3" icon={faGithub} /> 0 comments written
                </p>
                <p className="mb-2 w-full flex justify-start  items-center text-slate-600">
                  <FontAwesomeIcon className="mr-3" icon={faGithub} /> 0 tags followed
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Rightside
