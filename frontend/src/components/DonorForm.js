import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DonorForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="email" id="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNo">Mobile No.</Label>
        <Input type="text" name="mobileNo" id="mobileNo" placeholder="Enter your Mobile Number" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email-ID</Label>
        <Input type="text" name="email" id="email" placeholder="Enter your Email-ID" />
      </FormGroup>
      <FormGroup>
        <Label for="workingRegion">Working Area</Label>
        <Input type="select" name="workingRegion" id="workingRegion">
          <option>delhi</option>
          <option>mumbai</option>
          <option>bangaluru</option>
          <option>kolkata</option>
          <option>lucknow</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="availableFacilities">Facilities you could Provide( You can select multiples )</Label>
        <Input type="select" name="availableFacilities" id="availableFacilities" multiple>
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
     
      <Button>Submit</Button>
    </Form>
  );
}

export default DonorForm;