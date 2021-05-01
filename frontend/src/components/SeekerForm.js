import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import {useDispatch} from 'react-redux';
//import { postSeeker } from '../redux/ActionCreators';


const SeekerForm = (props) => {
  const dispatch = useDispatch();

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

  return (
    <Form>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNumber">Mobile No.</Label>
        <Input type="text" name="mobileNumber" id="mobileNumber" placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" placeholder="Enter your Email-ID" />
      </FormGroup>
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
      
      <Button>Submit</Button>
    </Form>
  );
}

export default SeekerForm;