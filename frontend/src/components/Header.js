import React, { useState } from 'react';
import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './images/madadLogo2.png'
import gym from './images/GYM.png'


function Header() {
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!isNavOpen);
    }
    return (
        <div>
            <Navbar dark className="header-clr" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/home">
                        <div className="row line align-items-center ml-4"><span>An IIT Indore initiative by Students' Gymkhana<img src={gym} className="m-1" alt="" height="20" width="26" /></span></div>

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
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/donors">
                                    Help-Providers
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/seekers">
                                    Help-Seekers
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/pmfund">
                                    PM Fund
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/awareness">
                                    Awareness
                                    </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    Contact Us
                                    </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;