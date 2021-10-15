import React from 'react';
import { Button, ButtonGroup, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./NavBar.css";

//********************************************** Navigation Bar component **************************************//
const NavBar = () => {
    const {user, logOut} = useAuth();
    return (
        <div>

        {/************************* Navigation Component Details with Route Links **********************/}
            <Navbar bg="light" variant="light" sticky="top" expand="lg">
            <Container fluid>
                <Navbar.Brand className="ms-5 txth" href="/">Flesh Drill</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    {/************************* Router Links **********************/}
                        <Nav.Link >
                            <Link className="txtnav" to="/">Home</Link>
                        </Nav.Link>
                        {/* <Nav.Link href="/home#programs">
                            <Link className="txtnav">Programs</Link>
                        </Nav.Link> */}
                        <Nav.Link as={Link} to="/plans" className="txtnav" >
                            Plans
                        </Nav.Link>
                        <Nav.Link as={Link} className="txtnav" to="/shop" >
                            Shop-now
                        </Nav.Link>
                        <Nav.Link as={Link} className="txtnav" to="/About" >
                            About
                        </Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log-out</Button> :
                            <Nav.Link as={Link} className="txtnav" to="/login">Log-in</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Nav>
                    {/* <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className="txtnav" variant="outline-secondary">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;