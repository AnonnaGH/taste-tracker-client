import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../ActiveLink/ActiveLink';
import './Header.css';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <Navbar className='px-4' bg="light" expand="lg">
                <Container className='py-3'>
                    <Navbar.Brand className='fw-bold'> <span className="text-success">Taste</span>  <span className="text-danger">Tracker</span>     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav
                            className="mx-auto justify-content-center align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ActiveLink className='mx-4' to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>



                        </Nav>
                        <div className='text-center mb-2'>
                            <Link to='/register'> <Button className='mx-3' variant="outline-success">Register</Button></Link>
                        </div>



                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <div>
                                {
                                    user ?
                                        <>
                                            <div className='d-flex'>

                                                <Link to='/login'> <Button onClick={handleLogOut} className='mx-3' variant="outline-success">Logout</Button></Link>
                                                <img className='rounded-circle user-img' src={user?.photoURL} alt="user image" title={user?.displayName} />
                                            </div>
                                        </>
                                        :
                                        <Link to='/login'> <Button className='mx-3' variant="outline-success">Login</Button></Link>

                                }
                            </div>
                        </div>




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;