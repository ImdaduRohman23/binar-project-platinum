import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import './navigation.css';


const Navigation = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <Navbar key='md' expand='md'>
                <Container fluid>
                    <div className="logo"></div>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-md'
                        aria-labelledby='offcanvasNavbar-expand-md'
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbar-expand-md'>
                            <div className="logo"></div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#ourservices">Our Services</Nav.Link>
                            <Nav.Link href="#whyus">Why Us</Nav.Link>
                            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            {
                                token? <Link to='.'><Button variant='danger' onClick={() => {window.localStorage.removeItem('token'); navigate('.')}}>Logout</Button></Link> : <Link to='/register'><Button variant='success'>Register</Button></Link>
                            }
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
        );
}

export default Navigation
