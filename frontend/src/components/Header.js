import React, { useState } from 'react';
import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Button, ButtonGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import title from './images/mainLogo2.png'

import { logOutUser } from '../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import SignUpBtn from './SignUp';

import SignInBtn from './SignIn';
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi';


function Header() {
    
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!isNavOpen);
    }
   
    
    const isAuth = useSelector(state => state.users.isAuth);
    
    const dispatch = useDispatch();
    const handleCollapse = () => {
        if (isNavOpen) {
            toggleNav();
        }
    }
    const handleLogout=()=>{
        
        dispatch(logOutUser());
    }
    return (
        <div>
            <Navbar dark className="header-clr" expand="md">
                <div className="container-fluid">
                    <NavbarBrand className="mr-auto" href="/home">
                        {/* <Row className=" align-items-center">
                            <Col>
                                <img src={logo} alt='' height="90px" width="90px" />
                            </Col>
                            <Col className="ml-2">
                            <img src={title} alt='' height="90px" width="230px" />
                            </Col>
                        </Row> */}
                        <img className="m-title" src={title} alt='' />
                    </NavbarBrand>
                    <NavbarToggler className='ml-auto' onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className='ml-auto text-center' navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={handleCollapse}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/donors" onClick={handleCollapse}>
                                    Help-Providers
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/seekers" onClick={handleCollapse}>
                                    Help-Seekers
                                    </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/donate"  onClick={handleCollapse}>
                                    Donation
                                    </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink className="nav-link" to="/awareness"  onClick={handleCollapse}>
                                    Covid-Info
                                    </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus" onClick={handleCollapse}>
                                    Contact Us
                                    </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/provider" onClick={handleCollapse}>
                                    Provider
                                </NavLink>
                            </NavItem> */}
                             <NavItem>
                                <NavLink className="nav-link" to="/profile"  onClick={handleCollapse} >{isAuth ? <h3> <BiUserCircle /></h3> : null}</NavLink>
                            </NavItem> 
                            <NavItem className="ml-5 mr-5">
                                {isAuth ? <Button color="danger" onClick={handleLogout}><BiLogOutCircle /> Logout</Button> : <ButtonGroup className="row"><Button className="col-6" color="primary"><SignInBtn /></Button><Button className="col-6" color="warning"><SignUpBtn /></Button></ButtonGroup>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            {/* <Modal isOpen={modal1} toggle={toggleSignIn}>
<ModalBody><SignIn /></ModalBody>
            </Modal>
            <Modal isOpen={modal2} toggle={toggleSignUp}>
<ModalBody><SignUp /></ModalBody>
            </Modal> */}
        </div>
    );
}

export default Header;