import React, { useState } from 'react';
import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Col, Row, Button, Modal, ModalBody, ButtonGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './images/madadLogo2.png';
import gym from './images/GYM.png';
import GoogleLogin from 'react-google-login';
import { loginUser, logOutUser } from '../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import SignUpBtn from './SignUp';

import SignInBtn from './SignIn';


function Header() {
    const [modal1, setSignin]=useState(false);
    const [modal2, setSignup]=useState(false);
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!isNavOpen);
    }
    const toggleSignIn=()=>{
        setSignin(!modal1);
    }
    const toggleSignUp=()=>{
        setSignup(!modal2);
    }
    const user = useSelector((state) => state.users.user);
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
    const responseGoogle = (res) => {
        if (res.tokenId) {
            dispatch(loginUser({ "name": res.profileObj.name, "email": res.profileObj.email, "tokenId": res.tokenId }));
        }
        else {
            console.log("Invalid");
        }
    }
    return (
        <div>
            <Navbar dark className="header-clr" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/home">
                        <div className="row line align-items-center ml-4"><span>A Students' Gymkhana IIT Indore initiative<img src={gym} className="m-1" alt="" height="20" width="26" /></span></div>

                        <Row className=" align-items-center">
                            <Col>
                                <img src={logo} alt='' height="90px" width="90px" />
                            </Col>
                            <Col className="ml-2">
                                <div className=" row title pr-5">MADAD</div>

                            </Col>
                        </Row>

                    </NavbarBrand>
                    <NavbarToggler className='ml-auto' onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className='ml-auto' navbar >
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
                            <NavItem>
                                <NavLink className="nav-link" to="/pmfund"  onClick={handleCollapse}>
                                    PM Fund
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/awareness"  onClick={handleCollapse}>
                                    Awareness
                                    </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus" onClick={handleCollapse}>
                                    Contact Us
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/provider" onClick={handleCollapse}>
                                    Provider
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile"  onClick={handleCollapse} >{isAuth ? user.name : null}</NavLink>

                            </NavItem>
                            <NavItem>
                                {isAuth ? <Button onClick={handleLogout}>Logout</Button> : <ButtonGroup><Button><SignInBtn /></Button><Button><SignUpBtn /></Button></ButtonGroup>}
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