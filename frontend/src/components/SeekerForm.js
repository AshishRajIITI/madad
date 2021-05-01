import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import { useDispatch } from 'react-redux';
import { postSeeker } from '../redux/ActionCreators';
import AutoSuggest from './AutoSuggest';





const SeekerForm = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [requirement, setRequirement] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submit");
    console.log(city);
    const seeker = {
      "name": name,
      "mobileNumber": mob,
      "email": email,
      "address": address,
      "city": city,
      "requirements": requirement,
      "comments": comment
    }
    console.log(seeker);
    dispatch(postSeeker(seeker));
    toggleModal();
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility=(fac)=>{
    setRequirement(fac);
  }
  return (
    <Form  onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNumber">Mobile No.</Label>
        <Input type="text" name="mobileNumber" id="mobileNumber" onChange={(e) => { setMob(e.target.value) }} placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email-ID" />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter your Address" />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <AutoSuggest text={city} setText={appendCity} sug={citySuggestion} />
      </FormGroup>
      <FormGroup>
        <Label for="requirements">Requirements ( You can select multiples )</Label>
        <AutoSuggest text={requirement} setText={appendFacility} sug={facilitySuggestion} />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Any comment</Label>
        <Input type="textarea" name="comments" id="comments" onChange={(e) => { setComment(e.target.value) }} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default SeekerForm;