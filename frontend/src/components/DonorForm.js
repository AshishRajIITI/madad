import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import {useDispatch} from 'react-redux';
import { postDonor } from '../redux/ActionCreators';

const DonorForm = ({toggleModal}) => {
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
    dispatch(postDonor(donor));
    toggleModal();
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility=(fac)=>{
    setFacility(fac);
  }

  


  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="email" id="name" onChange={e=>setName(e.target.value)} placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNo">Mobile No.</Label>
        <Input type="text" name="mobileNo" id="mobileNo" onChange={e=>setMob(e.target.value)} placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email-ID</Label>
        <Input type="text" name="email" id="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email-ID" />
      </FormGroup>
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
        <Input type="textarea" name="comments" onChange={e=>setComment(e.target.value)} id="comments" />
      </FormGroup>      
     
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default DonorForm;