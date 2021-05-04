import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { loginUser } from '../redux/ActionCreators';

function SignIn(props) {
    const dispatch = useDispatch();
    const [mob, setMob] = useState('');
    const [pin, setPin] = useState('');
    function handleSignIn(e){
e.preventDefault();
    dispatch(loginUser({"mobileNumber": mob, "password": pin}))
    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
            <FormGroup>
                    <Label for="mob">Name</Label>
                    <Input type="text" name="mob" required id="mob" onChange={e => setMob(e.target.value)} placeholder="Enter Phone Number" />
            </FormGroup>
            <FormGroup>
                    <Label for="pin">Name</Label>
                    <Input type="text" name="pin" required id="pin" onChange={e => setPin(e.target.value)} placeholder="Enter Pin" />
            </FormGroup>
            <Button type="submit">Sign In</Button>
            </Form>
        </div>
    );
}

export default SignIn;