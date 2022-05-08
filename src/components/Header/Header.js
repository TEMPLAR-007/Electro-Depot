import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import logo from '../Images/site logo/logo.png'


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/"><img width={50} src={logo} alt="" /> <span className='fw-bold text-warning'>Electro <span className='text-info'>Depot</span></span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center gap-4">

                            {
                                user && <>
                                    <CustomLink to="/manageInventories">Manage Inventories</CustomLink>
                                    <CustomLink to="/addItem">Add Item</CustomLink>
                                    <CustomLink to="/myItem">My items</CustomLink>
                                </>
                            }
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            {
                                user ?
                                    <Button onClick={handleSignOut} variant='outline-dark border-0 '>Sign Out</Button>

                                    :
                                    <CustomLink to="/login">Login</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;