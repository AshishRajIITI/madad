import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row  } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';


import { Control, LocalForm, Errors } from 'react-redux-form';
//import { postSeeker } from '../redux/ActionCreators';

import { useDispatch } from 'react-redux';
import { postSeeker } from '../redux/ActionCreators';
import AutoSuggest from './AutoSuggest';





const SeekerForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [isFormInValid, makeValid] = useState(true);
  const [city, setCity] = useState([]);
  const [name, setName]= useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [requirement, setRequirement] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const seeker = {
      "name": name,
      "mobileNumber": mob,
      "email": email,
      "address": address,
      "city": city,
      "requirements": requirement,
      "comments": comment
    }
    dispatch(postSeeker(seeker));
    toggleModal();
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility = (fac) => {
    setRequirement(fac);
  }

  const isName = (val) => /^[a-zA-Z]/.test(val);
  const isNumber = (val) => /^\d{10}$/.test(val);
  const validEmail = val => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
  
  function handleUpdate(form) {
    makeValid(!form['$form'].valid );
  }

  return (
    <LocalForm onSubmit={handleSubmit} onUpdate={(form) => handleUpdate(form)}>
      <Row className="form-group">
        <Label htmlFor="name">Name</Label>
        <Col sm={12}>
          <Control.text model=".name" name="name"
            id="name"
            className="form-control"
            validators={{
              isName
            }}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name" />
          <Errors
            className="text-danger"
            model=".name"
            show="touched"
            messages={{
              isName: "Pleasse Enter Your Full Name"
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="mobileNumber">Mobile No.</Label>
        <Col sm={12}>
          <Control.text model=".mobileNumber" name="mobileNumber"
            id="mobileNumber"
            validators={{
              isNumber
            }}
            onChange={(e)=>setMob(e.target.value)}
            placeholder="Enter your Mobile Number"
            className="form-control"
          />
          <Errors
            className="text-danger"
            model=".mobileNumber"
            show="touched"
            messages={{
              isNumber: 'Must be a valid number'
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="email">Email-ID</Label>
        <Col sm={12}>
          <Control.text model=".email" name="email"
            id="email"
            placeholder="Enter your Email-ID"
            className="form-control"
            validators={{
              validEmail
            }}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Errors
            className="text-danger"
            model=".email"
            show="touched"
            messages={{
              validEmail: 'Must be a valid email'
            }}
          />
        </Col>

      </Row>
      <FormGroup>
        <Label for="city">City </Label>
        <AutoSuggest text={city} setText={appendCity} sug={citySuggestion} placeHolder="Select your City" />
      </FormGroup>
      <FormGroup>
        <Label for="requirements">Requirement </Label>
        <AutoSuggest text={requirement} setText={appendFacility} sug={facilitySuggestion} placeHolder="Select your facility" />
      </FormGroup>
      
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter your Address" />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Any comment</Label>
        <Input type="textarea" name="comments" id="comments" onChange={(e) => { setComment(e.target.value) }} />
      </FormGroup>      
      {/* <FormGroup>
        <Label for="exampleFile">Upload Prescription File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}
      
      <Button disabled={isFormInValid}>Submit</Button>
    </LocalForm>
  );
}

export default SeekerForm;