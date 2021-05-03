import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import { useDispatch } from 'react-redux';
import { postDonor } from '../redux/ActionCreators';
import { Control, LocalForm, Errors } from 'react-redux-form';

const DonorForm = (props) => {

  const dispatch = useDispatch();
  const [isFormInValid, makeValid] = useState(true);
  const [city, setCity] = useState([]);
  const [name, setName] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [facility, setFacility] = useState([]);
  const [comment, setComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submit");
    console.log(city);
    const workingRegion = city.join(' / ');
    const availableFacilities = facility.join(' / ');
    const donor = {
      "name": name,
      "mobileNumber": mob,
      "email": email,
      "workingRegion": workingRegion,
      "availableFacilities": availableFacilities,
      "comments": comment
    }
    console.log(donor);
    dispatch(postDonor(donor));
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility = (fac) => {
    setFacility(fac);
  }

  const isName = (val) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(val);
  const isNumber = (val) => /^\d{10}$/.test(val);
  const validEmail = val => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
  
  function handleUpdate(form) {
    makeValid(!form['$form'].valid );
  }

  return (
    <LocalForm
      onUpdate={(form) => handleUpdate(form)}
      onSubmit={handleSubmit}>
      <Row className="form-group">
        <Label htmlFor="name">Name</Label>
        <Col>
          <Control.text model=".name" name="name"
            id="name"
            className="form-control"
            validators={{
              isName
            }}
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
        <Label htmlFor="mobileNo">Mobile No.</Label>
        <Col>
          <Control.text model=".mobileNo" name="mobileNo"
            id="mobileNo"
            validators={{
              isNumber
            }}
            placeholder="Enter your Mobile Number"
            className="form-control"
          />
          <Errors
            className="text-danger"
            model=".mobileNo"
            show="touched"
            messages={{
              isNumber: 'Must be a valid number'
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Label htmlFor="email">Email-ID</Label>
        <Col>
          <Control.text model=".email" name="email"
            id="email"
            placeholder="Enter your Email-ID"
            className="form-control"
            validators={{
              validEmail
            }}
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
        <Label for="workingRegion">Working Area</Label>
        <Chips
          alwaysRenderSuggestions
          value={city}
          onChange={appendCity}
          suggestions={citySuggestion}
        />
      </FormGroup>
      <FormGroup>
        <Label for="availableFacilities">Facilities you could Provide( You can select multiples )</Label>
        <Chips
          alwaysRenderSuggestions
          value={facility}
          onChange={appendFacility}
          suggestions={facilitySuggestion}
        />
      </FormGroup>

      <FormGroup>
        <Label for="comments">Any comment</Label>
        <Input type="textarea" name="comments" onChange={e => setComment(e.target.value)} id="comments" />
      </FormGroup>

      <Button type="submit" disabled={isFormInValid}>Submit</Button>
    </LocalForm>
  );
}

export default DonorForm;