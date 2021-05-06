import React, { useEffect, useState } from 'react';
import { FaRegIdBadge } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, ModalBody, Modal } from 'reactstrap';
import { sendOTPrequest, signupUser } from '../redux/ActionCreators';



function SignUpBtn(props) {
    const [modal, setModal] = useState(false);
    const otpR = useSelector(state => state.users.otp);
    const toggleModal = () => {
        setModal(!modal);
console.log("modal called");
console.log(otpR);
    }
    function SignUp() {
        const dispatch = useDispatch();
        
        const [password, setPass] = useState('');
        const [isOtpS, setOtpS] = useState(false);
        const [isValidOtp, setOtpValid] = useState(false);
        const [tc, setTC] = useState(false);
        const [otp, setOtp] = useState(0);
        const [name, setName] = useState('');
        const [mob, setMob] = useState('');
        const [email, setEmail] = useState('');
        
        const generateOtp = (e) => {
            e.preventDefault();
            setOtpS(true);
             dispatch(sendOTPrequest({ "mobileNumber": mob }, toggleModal));
            if(otpR===0){
                console.log(otpR);
                setModal(!modal);
            }

        }

        function handleSignUp(e) {
            e.preventDefault();
            console.log(otpR);
            if (otp === otpR) {
                console.log(otp);
                const user = {
                    "name": name,
                    "mobileNumber": mob,
                    "email": email ? email : null,
                    "password": password
                }
                dispatch(signupUser(user));
                setOtpValid(!isValidOtp);

                toggleModal();
                if (props.toggleSignIn) {
                    props.toggleSignIn();
                };

            }

        }

        return (
            <div>
                <Form onSubmit={generateOtp}>
                    <FormGroup>
                        <Label for="name">Name*</Label>
                        <Input disabled={isOtpS} type="text" name="name" required id="name" onChange={e => setName(e.target.value)} placeholder="Enter your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mob">Mobile No.*</Label>
                        <Input type="text" name="mob" required id="mob" disabled={isOtpS} onChange={e => setMob(e.target.value)} placeholder="Enter your Mobile Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">4-digit Pin*</Label>
                        <Input type="password" name="password" required id="password" disabled={isOtpS} onChange={e => setPass(e.target.value)} placeholder="Create a 4-digit Pin" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" disabled={isOtpS} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />
                    </FormGroup>
                    <FormGroup check className="mb-4 ml-3">
                        <Label check>
                            <Input type="checkbox" name="tc" id="tc" disabled={isOtpS} onChange={e => setTC(!tc)} />{' '}
                             I accept the <Link className="" to="/tnc" rel="noreferrer" target="_blank">Terms and Conditions</Link>
                        </Label>
                    </FormGroup>
                    <Button color="primary" className="m-auto" type="submit" disabled={!tc} >Generate OTP</Button>
                </Form>
                {isOtpS
                    ?
                    <div>
                        <Form onSubmit={handleSignUp}>
                            <FormGroup>
                                <Label for="otp">4-digit OTP</Label>
                                <Input type="number" name="otp" required id="otp" onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
                            </FormGroup>
                            <Button type="submit">SignUp</Button>
                        </Form>
                    </div>
                    :
                    null
                }
            </div>
        );
    }



    return (
        <div>
            <div onClick={toggleModal}><FaRegIdBadge /> Sign Up</div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody><SignUp /></ModalBody>
            </Modal>
        </div>
    );
}

export default SignUpBtn;