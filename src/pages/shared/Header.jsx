import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">

                <Navbar.Brand className='fw-bold'>Taste Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex ms-auto">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='mx-4' to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>



                        </Nav>

                        <Link to='/register'> <Button className='mx-3' variant="outline-success">Register</Button></Link>

                        <Link to='/login'> <Button className='mx-3' variant="outline-success">Login</Button></Link>


                    </div>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;