import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    <img src='https://www.linkpicture.com/q/27-278965_credit-agricole-logo-png-transparent-png.png' alt="" />
    return (

        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/">
                        <img src='https://www.linkpicture.com/q/27-278965_credit-agricole-logo-png-transparent-png.png' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav >
                            <Nav.Link
                                as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;