import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, Button, Row, Col } from 'reactstrap';
import DonorForm from './DonorForm';
import SeekerForm from './SeekerForm';
import SignInBtn from './SignIn';
import tick from './images/tick.png'

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
          <h6 className="text-center">Your one minute can save a life. Please take some time to fill this form and we will help you to help others.
          </h6><h6 className="text-center">Provider/Seeker have to verify their details before they can post their contributions.
          </h6>
          <Row className=" align-items-center justify-content-center mt-5">
            <Col sm="12">
              {isAuth
                ? <div className="text-center">
                  <h5>You are Authorised</h5>
                  <h5 className="mt-3"><img height="100px" width="100px" src={tick} alt="" /></h5>
                  <h4><Button color="success" className="row mt-3" onClick={() => toggle('2')}>Continue</Button></h4>
                </div>
                : <div className="text-center">
                  <h4>Kindly Login to verify </h4>
                  <h4>your Details</h4>
                  <Button color="danger"><SignInBtn /> </Button>

                </div>
              }
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {type === "0" ? <DonorForm toggleModal={toggleModal} /> : <SeekerForm toggleModal={toggleModal} />}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;

