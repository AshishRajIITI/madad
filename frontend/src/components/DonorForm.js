import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import { useDispatch } from 'react-redux';
import { postDonor } from '../redux/ActionCreators';


const DonorForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  

  const [city, setCity] = useState([]);
  const [name, setName] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [facility, setFacility] = useState([]);
  const [comment, setComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
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
    dispatch(postDonor(donor));
    toggleModal();
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility = (fac) => {
    setFacility(fac);
  }




  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" onChange={e => setName(e.target.value)} placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNo">Mobile No.</Label>
        <Input type="tel" required name="mobileNo" id="mobileNo" onChange={e => setMob(e.target.value)} placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email-ID</Label>
        <Input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your Email-ID" />
      </FormGroup>
      <FormGroup>
        <Label for="workingRegion">Working Cities</Label>

        <Chips
          placeholder="Select your working cities"
          alwaysRenderSuggestions
          value={city}
          onChange={appendCity}
          suggestions={citySuggestion}
        />
      </FormGroup>
      <FormGroup>
        <Label for="availableFacilities">Facilities you can Provide</Label>
        <Chips
          placeholder="Select facilities you provide"
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

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default DonorForm;