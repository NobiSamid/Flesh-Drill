import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css";

//********************************************** Navigation Bar component **************************************//
const NavBar = () => {
    return (
        <div>

        {/************************* Navigation Component Details with Route Links **********************/}
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="ms-5 txth" href="/">Flesh Drill</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    {/************************* Router Links **********************/}
                        <Nav.Link >
                            <Link className="txtnav" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className="txtnav" to="/plans">Plans</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className="txtnav" to="/shop">Shop-now</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className="txtnav" to="/about">About</Link>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className="txtnav" variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;