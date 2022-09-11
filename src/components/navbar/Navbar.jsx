import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './navbar.css'
import CreateButton from 'components/Buttons/createButton/CreateButton'

const NavigationBar = () => {
    return (
        <Navbar className="shadow-md sticky-top bg-white" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>{' '}
                <Navbar.Toggle
                    className="shadow-none"
                    aria-controls="navbarScroll"
                />
                <Navbar.Collapse
                    style={{ transition: 'ease 0.4s' }}
                    id="navbarScroll"
                >
                    <Form className="d-flex items-center md:mt-3 mr-auto">
                        <Form.Control
                            type="search"
                            placeholder="ابحث هنا"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">بحث</Button>
                    </Form>
                    <Nav
                        className="my-2 my-lg-0 gap-3 flex ml-auto items-center"
                        style={{ maxHeight: '215px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/login"
                            className="hover:text-[#3b49df]"
                        >
                            تسجيل دخول
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/register"
                            className="w-[90%]"
                            href="#"
                        >
                            <CreateButton text="انشاء حساب" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
