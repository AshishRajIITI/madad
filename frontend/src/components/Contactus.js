import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Contactus = (props) => {
  return (
    <div className="container" style = {{marginTop:20,marginBottom:20}}>
        <div className = "container-div" style = {{color:'white',textAlign:'center'}}>
            How can we help you?
            </div>
    <Form style = {{marginTop: 40, marginRight: 50,marginLeft:75}}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2} style = {{color:'white'}}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleName" sm={2} style = {{color:'white'}}>Name</Label>
        <Col sm={10}>
          <Input type="name" name="name" id="exampleName" placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2} style = {{color:'white'}}>Message</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup check row style = {{marginBottom:25,marginTop:10}}>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Send</Button>
        </Col>
      </FormGroup>
    </Form>
    <div className = "container-link" style = {{textAlign:'center'}}>
        <span class = "create">
            <a href="http://gymkhana.iiti.ac.in/#" class="link">Gymkhana IIT Indore</a>
            </span>
    </div>
    </div>
  );
}

export default Contactus;