import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navigation.css';


const Navigation = () => {
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
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
        );
}

export default Navigation
