import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './navbar.css'
import CreateButton from '../../components/buttons/CreateButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { IsLoggedInContext } from '../../context/IsLoggedInContext'

import Profiledropdown from './Profiledropdown'

const NavigationBar = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext)
  return (
    <Navbar className="shadow-mdsticky-top bg-white" expand="lg">
      <Container className="py-[2px] ">
        <Navbar.Brand className="logo" href="#">
          ArabiansDevWorld
        </Navbar.Brand>
        <Navbar.Toggle className="shadow-none" aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ transition: 'ease 0.4s' }} id="navbarScroll">
          <Form className="d-flex items-center md:mt-3 mr-auto position-relative">
            <Form.Control type="search" placeholder="ابحث هنا" className="me-2" aria-label="Search" />
            <Button className="position-absolute search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <Nav className="my-2 my-lg-0 gap-3 flex ml-auto items-center" style={{ maxHeight: '215px' }} navbarScroll>
            <Nav.Link as={Link} to="/">
              الرئيسيه
            </Nav.Link>
            {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/login" className="hover:text-[#3b49df]">
                  تسجيل دخول
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="nav-btn" style={{ width: '90%' }} href="#">
                  <CreateButton text="انشاء حساب" />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/new" style={{ width: '90%' }} className="nav-btn" href="#">
                  <CreateButton text="انشاء منشور جديد" />
                </Nav.Link>
                <Profiledropdown />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
