import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand className="ms-5" href="#">Flesh Drill</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link >
                <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/plans">Plans</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/shop">Shop-now</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/about">About</Link>
                </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;