import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import citySuggestion from "../resources/city";
import facilitySuggestion from '../resources/facilty';
import Chips from 'react-chips';
import { useDispatch } from 'react-redux';
import { postDonor } from '../redux/ActionCreators';
import AutoSuggest from './AutoSuggest';

import services from '../resources/services'
import { useHistory } from 'react-router';
import { GrTwitter } from 'react-icons/gr';


const DonorForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector(state=>state.users.user);
  const [city, setCity] = useState([]);
  const [name, setName] = useState('');
  const [twitter, setTwit] = useState(true);
  const [facility, setFacility] = useState('');
  const [comment, setComment] = useState('');
  const [value1, setV1] = useState('');
  const [key1, setK1] = useState('');
  const [value2, setV2] = useState('');
  const [key2, setK2] = useState('');
  const [donorAuth, setDAuth] = useState(false);
  const [tags, setTags] =useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const workingRegion = city.join(' / ');
    var donorType;
    if (donorAuth) {
      donorType = "donorAuth";
    }
    else {
      donorType = "donorNonAuth";
    }
    const donor = {
      "organizationName": name,
      "city": workingRegion,
      "services": facility,
      "comments": comment,
      "twitter": twitter,
      "tags":tags,
      "donorType": donorType,
      "extra": [{ "key": key1, "value": value1 }, { "key": key2, "value": value2 }]
    }
    console.log(donor);

    dispatch(postDonor(donor));

    if (donorAuth) {
      window.location.href = "https://forms.gle/mmVuai6NHkuQP2m7A";
    }
    history.push('/seekers');
  }
  const appendCity = (ci) => {
    setCity(ci);
  }

  const appendFacility = (fac) => {
    setFacility(fac);
    services.map((s) => {
      if (s.service === fac) {
        if (s.donorAUTH) {
          setDAuth(true);
        }
        else {
          setDAuth(false);
        }
      }
      return (null);
    })
  }




  return (
    <Form onSubmit={handleSubmit} >
      <h5 className="text-center mt-3">Registration for Providing Help</h5>
      <FormGroup>
        <Label for="name">Organization Name</Label>
        <Input type="text" name="name" id="name" onChange={e => setName(e.target.value)} placeholder="Enter your Organization Name" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="mobileNo">Mobile No.</Label>
        <Input type="tel" required name="mobileNo" id="mobileNo" onChange={e => setMob(e.target.value)} placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email-ID</Label>
        <Input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your Email-ID" />
      </FormGroup> */}

      <FormGroup>
        <Label for="city">Working Cities*</Label>
        <small>(multiple selections allowed)</small>
        <Chips
          placeholder="Select your working cities"
          alwaysRenderSuggestions
          value={city}
          onChange={appendCity}
          suggestions={citySuggestion}
        />
      </FormGroup>
      <FormGroup>
        <Label for="service">Service you can Provide*</Label>
        <small>(OxygenCylinder/Medicines/Ambulance/Remdesivir/Bed/Tiffin/Blood/Covid-Plasma)</small>
        {/* <Chips
          placeholder="Select facilities you provide"
          alwaysRenderSuggestions
          value={facility}
          onChange={appendFacility}
          suggestions={facilitySuggestion}
        /> */}
        <AutoSuggest text={facility} setText={appendFacility} sug={facilitySuggestion} placeHolder="Select your facility" />
      </FormGroup>
      {
        services.map((s) => {
          if (s.service === facility) {
            return (
              <div>
                <FormGroup>
                  <Label for="key1">{s.key1}*</Label>
                  <Input type="text" required name="key1" id="key1" onChange={e => { setV1(e.target.value); setK1(s.key1); }} placeholder="Enter value" />
                </FormGroup>
                <FormGroup>
                  <Label for="key2">{s.key2}*</Label>
                  <Input type="text" required name="key2" id="key2" onChange={e => { setV2(e.target.value); setK2(s.key2); }} placeholder="Enter value" />
                </FormGroup>
              </div>
            )
          }
          else
            return (null);
        })
      }
      <FormGroup>
        <Label for="comments">Description</Label>
        <Input type="textarea" name="comments" onChange={e => setComment(e.target.value)} id="comments" />
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
          I allow posting my data to twitter  <GrTwitter color="blue" />
        </Label>
      </FormGroup>
      

      <Label> {donorAuth ? <span>Please help us verify your data by filling the Google form </span> : null}</Label>
      <Button type="submit" color="primary" block>{donorAuth ? <span>Continue</span> : <span>Submit</span>}</Button>
    </Form>
  );
}

export default DonorForm;


