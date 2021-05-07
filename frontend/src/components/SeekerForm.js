import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';

import { useDispatch } from 'react-redux';
import { postSeeker } from '../redux/ActionCreators';
import AutoSuggest from './AutoSuggest';
import { GrTwitter } from 'react-icons/gr';
import { useHistory } from 'react-router';





const SeekerForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  // const user = useSelector(state=> state.users.user);
const history = useHistory();
  const [city, setCity] = useState('');
 
  const [twitter, setTwit]= useState(true);
 
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [requirement, setRequirement] = useState('');
  const [tags, setTags] =useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const seeker = {
      "address": address,
      "city": city,
      "tags":tags,
      "twitter": twitter,
      "services": requirement,
      "comments": comment
    }
    dispatch(postSeeker(seeker));
    history.push('/donors');
    //toggleModal();
  }
  const appendCity = (ci) => {
    setCity(ci);
  }
  const appendFacility = (fac) => {
    setRequirement(fac);
  }
  return (
    <Form onSubmit={handleSubmit}>
      {/* <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
      </FormGroup> */}
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter your Address" />
      </FormGroup>
      <FormGroup>
        <Label for="city">City*</Label>
        <AutoSuggest text={city} setText={appendCity} sug={citySuggestion} placeHolder="Select your city" />
      </FormGroup>
      <FormGroup>
        <Label for="requirements">Requirements*</Label>
        <small>(OxygenCylinder/Medicines/Ambulance/Remdesivir/Bed/Tiffin/Blood/Covid-Plasma)</small>
        <AutoSuggest text={requirement} setText={appendFacility} sug={facilitySuggestion} placeHolder="Select your facility" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="mobileNumber">Mobile No.</Label>
        <Input type="text" name="mobileNumber" id="mobileNumber" onChange={(e) => { setMob(e.target.value) }} placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email-ID" />
      </FormGroup> */}
      <FormGroup>
        <Label for="comments">Description</Label>
        <Input type="textarea" name="comments" id="comments" onChange={(e) => { setComment(e.target.value) }} />
      </FormGroup>
      {
        twitter
          ?
          <FormGroup>
            <Label for="tags">Include Twitter Tags</Label>
            <Input type="text" name="tags" placeholder="#Emergancy #Urgent #CovidHelp ...." onChange={e => setTags(e.target.value)} id="tags" />
          </FormGroup>
          : null
      }
      <FormGroup check className="mb-4 ml-3">
        <Label check>
          <Input checked={twitter} onChange={() => setTwit(!twitter)} type="checkbox" />{' '}
          I allow posting my data to twitter <GrTwitter color="blue" />
        </Label>
      </FormGroup>
      <Button type="submit" block className="" color="primary">Submit</Button>
    </Form>
  );
}

export default SeekerForm;