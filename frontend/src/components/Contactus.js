import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cxdt4z9', 'template_7pnsjag', e.target, 'user_T37xBHudJO9m0oYsi8ZQ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  }
  

  return (
       
    <div className="container" style = {{marginTop:20,marginBottom:20}}>
        <div className = "container-div" style = {{color:'white',textAlign:'center'}}>
            How can we help you?
        </div>
    <Form onSubmit={sendEmail} style = {{marginTop: 40, marginRight: 50,marginLeft:75}}>
      
    <FormGroup row>
        <Label for="name" sm={2} style = {{color:'white'}}>Name</Label>
        <Col sm={10}>
          <Input type="name" name="user_name" id="name" placeholder="Name" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="email" sm={2} style = {{color:'white'}}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="user_email" id="email" placeholder="Email" />
        </Col>
      </FormGroup>
     
      <FormGroup row>
        <Label for="comments" sm={2} style = {{color:'white'}}>Feedbacks/Comments</Label>
        <Col sm={10}>
          <Input type="textarea" name="message" id="comments" />
        </Col>
      </FormGroup>
      <FormGroup check row style = {{marginBottom:25,marginTop:10}}>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" value="Send">Send</Button>
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