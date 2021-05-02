import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row  } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import {useDispatch} from 'react-redux';
import { Control, LocalForm, Errors } from 'react-redux-form';
//import { postSeeker } from '../redux/ActionCreators';


const SeekerForm = (props) => {
  const dispatch = useDispatch();
  const [isFormInValid, makeValid] = useState(true);
  const [city, setCity] = useState([]);
  const [name, setName]= useState('');
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
      "availableFacilities" : availableFacilities,
      "comments": comment
    }
    console.log(donor);
    //dispatch(postDonor(donor));
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility=(fac)=>{
    setFacility(fac);
  }

  const isName = (val) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(val);
  const isNumber = (val) => /^\d{10}$/.test(val);
  const validEmail = val => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
  
  function handleUpdate(form) {
    makeValid(!form['$form'].valid );
  }

  return (
    <LocalForm onUpdate={(form) => handleUpdate(form)}>
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
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" placeholder="Enter your Address" />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input type="select" name="city" id="city">
          {citySuggestion.map((c)=>{
            return(
              <option>{c}</option>
            )
          })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="requirements">Requirements ( You can select multiples )</Label>
        <Input type="select" name="requirements" id="requirements" multiple>
          <option>O2-cylinder</option>
          <option>Hospital Beds</option>
          <option>Medicines</option>
          <option>Plasma</option>
          <option>Others</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="comments">Any comment</Label>
        <Input type="textarea" name="comments" id="comments" />
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