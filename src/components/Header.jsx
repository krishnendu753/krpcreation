import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Icon from 'react-bootstrap-icons';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className="header">
            <Container className='header-container'>
                <div className="hamburger">
                    <div className="hamburger-btn" onClick={handleShow}>
                        <Icon.List size={30} />
                    </div>
                    <Offcanvas show={show} onHide={handleClose} placement='start' backdrop="static">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Brand className='headerText'>Navbar with text</Navbar.Brand>
                </div>
                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button className='headerButton' variant="primary" type="button" >
                            SignIn
                        </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
