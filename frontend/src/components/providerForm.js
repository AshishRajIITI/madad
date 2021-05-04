import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DonorForm from './DonorForm';

const Example = (props) => {
    const isAuth = useSelector((state)=>state.users.isAuth)
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container">
      <Nav className="m-auto">
        <NavItem>
          <NavLink
            className=''
            onClick={() => { toggle('1'); }}
          >
            Authentication
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className=''
            onClick={() => { toggle('2'); }}
          >
            General Details
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {isAuth
              ? <h1>Auth</h1>
              : <div>
                <Button>SignIn</Button>
                Or
                <Button>SignUp</Button>
              </div>
              }
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <DonorForm toggleModal={toggle} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              {isAuth
              ? <h4>Authorised</h4>
              : <h4>Login</h4>
              }
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;