import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTwitter,
    faInstagramSquare,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import HomePost from './HomePost'
const Home = () => {
    return (
        <main className="d-flex flex-nowrap mt-3">
            <div className="container">
                <div className="row mb-3 text-center">
                    <div className="col-md-3 themed-grid-col">
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light con-left">
                            <a
                                href="/"
                                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                            >
                                <svg
                                    className="bi pe-none me-2"
                                    width="40"
                                    height="32"
                                ></svg>
                                <span className="fs-4">Sidebar</span>
                            </a>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <a
                                        href="#"
                                        className="nav-link active list-start"
                                        aria-current="page"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Listings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Podcasts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Videos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Tags
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Forem Shop
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Sponsors
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Software comparisons
                                    </a>
                                </li>
                                <h4 className="list-start mx-3">Other</h4>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Code of Conduct
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link link-dark list-start"
                                    >
                                        <svg
                                            className="bi pe-none me-2"
                                            width="16"
                                            height="16"
                                        ></svg>
                                        Terms of use
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faInstagramSquare} />
                                <FontAwesomeIcon icon={faTwitch} />
                            </div>
                            <hr />
                            <div className="dropdown pb-5">
                                <a
                                    href="#"
                                    className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://github.com/mdo.png"
                                        alt=""
                                        width="32"
                                        height="32"
                                        className="rounded-circle me-2"
                                    />
                                    <strong>mdo</strong>
                                </a>
                                <ul className="dropdown-menu text-small shadow">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            New project...
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="popular">
                                <h5 className="list-start mx-3 pt-4">
                                    Popular Tags
                                </h5>

                                <ul className="nav nav-pills flex-column mb-auto">
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                            aria-current="page"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Listings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Podcasts
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Videos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Tags
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Forem Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Sponsors
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Guides
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Software comparisons
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Code of Conduct
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link link-dark list-start"
                                        >
                                            Terms of use
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 themed-grid-col">
                        <HomePost />
                    </div>
                    <div className="col-md-3 themed-grid-col">
                        <div className="list-group w-auto ww-auto">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            List group item heading
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        now
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            Another title here
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph that goes a little longer
                                            so it wraps to a new line.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        3d
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">Third heading</h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        1w
                                    </small>
                                </div>
                            </a>
                        </div>
                        <div className="list-group w-auto ww-auto">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            List group item heading
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        now
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            Another title here
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph that goes a little longer
                                            so it wraps to a new line.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        3d
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">Third heading</h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        1w
                                    </small>
                                </div>
                            </a>
                        </div>
                        <div className="list-group w-auto ww-auto">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            List group item heading
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        now
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            Another title here
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph that goes a little longer
                                            so it wraps to a new line.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        3d
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">Third heading</h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        1w
                                    </small>
                                </div>
                            </a>
                        </div>
                        <div className="list-group w-auto ww-auto">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            List group item heading
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        now
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">
                                            Another title here
                                        </h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph that goes a little longer
                                            so it wraps to a new line.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        3d
                                    </small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex gap-3 py-3 cont"
                                aria-current="true"
                            >
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-2">Third heading</h6>
                                        <p className="mb-0 opacity-75">
                                            Some placeholder content in a
                                            paragraph.
                                        </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">
                                        1w
                                    </small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
