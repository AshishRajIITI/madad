import React, { useState } from 'react';
import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './images/madadLogo2.png'
import iiti from './images/iiti.png'


function Header() {
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!isNavOpen);
    }
    return (
        <div>
            <Navbar dark className="header-clr"  expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/home">
                        <Row>
                        <Col>
                        <img src={logo} alt='' height="90px" width="90px" />
                        </Col>
                        <Col className="ml-2">
                        <div className="row line align-items-center">An initiative by IIT Indore <img src={iiti} className="m-1" alt="" height="20" width="20" /></div>
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