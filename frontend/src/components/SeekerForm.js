import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SeekerForm = (props) => {
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
          <option>delhi</option>
          <option>mumbai</option>
          <option>bangaluru</option>
          <option>kolkata</option>
          <option>lucknow</option>
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