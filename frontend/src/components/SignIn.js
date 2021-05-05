import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { loginUser } from '../redux/ActionCreators';
import SignUpBtn from './SignUp';





function SignInBtn(props) {
    const isAuth = useSelector(state=>state.users.isAuth)
    const [modal, setModal]=useState(false);
    const toggleModal=()=>{
setModal(!modal);}

 function SignIn(props) {
    const dispatch = useDispatch();
    const [mob, setMob] = useState('');
    const [pin, setPin] = useState('');
     function handleSignIn(e){
    e.preventDefault();
    dispatch(loginUser({"mobileNumber": mob, "password": pin}))

    if(isAuth){
        toggleModal();
    }
    
    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
            <FormGroup>
                    <Label for="mob">Registered Number</Label>
                    <Input type="text" name="mob" required id="mob" onChange={e => setMob(e.target.value)} placeholder="Enter Phone Number" />
            </FormGroup>
            <FormGroup>
                    <Label for="pin">Pin</Label>
                    <Input type="text" name="pin" required id="pin" onChange={e => setPin(e.target.value)} placeholder="Enter Pin" />
            </FormGroup>
            <div className="row"><div className="col-7">Are you new here. Click here to </div><div className="col-4"><SignUpBtn toggleSignIn={toggleModal} /></div></div>
            <Button type="submit" color="primary" className="m-auto">Sign In</Button>
            </Form>
        </div>
    );
}

    return (
        <div>
            <div onClick={toggleModal}>Sign In</div>
            <Modal isOpen={modal} toggle={toggleModal}>
<ModalBody><SignIn /></ModalBody>
            </Modal>
        </div>
    );
}

export default SignInBtn;