import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DonorForm from './DonorForm';
import SeekerForm from './SeekerForm';
import SignInBtn from './SignIn';

const Example = ({ toggleModal, type }) => {
  const isAuth = useSelector((state) => state.users.isAuth)
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container h-700">
      <Nav className="b-bottom">
        <NavItem className="m-auto">
          Authentication
        </NavItem>
        <NavItem className="m-auto">
          Service Details
        </NavItem>
      </Nav>
      <TabContent className="" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className=" align-items-center justify-content-center mt-5">
            <Col sm="12">
              {isAuth
                ? <div className="text-center">
                  You are Authorised
<Button color="success" onClick={() => toggle('2')}>Continue</Button>

                </div>
                : <div className="text-center">
                  <h4>You are not Authorised.</h4>
                  <h4>Kindly Login</h4>
                  <Button color="danger"><SignInBtn /> </Button>

                </div>
              }
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {type==="0" ? <DonorForm toggleModal={toggleModal} /> : <SeekerForm toggleModal={toggleModal} /> }
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;

