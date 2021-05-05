import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Row, Col, ModalBody, Modal } from 'reactstrap';
import { sendOTPrequest, signupUser } from '../redux/ActionCreators';



function SignUpBtn(props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);

    }
    function SignUp() {
        const dispatch = useDispatch();
        const otpR = useSelector(state => state.users.otp);
        const [password, setPass] = useState('');
        const [isOtpS, setOtpS] = useState(false);
        const [isValidOtp, setOtpValid] = useState(false);
        const [tc, setTC] = useState(false);
        const [otp, setOtp] = useState(0);
        const [name, setName] = useState('');
        const [mob, setMob] = useState('');
        const [email, setEmail] = useState('');

        const generateOtp = () => {
            setOtpS(!isOtpS);
            dispatch(sendOTPrequest({ "mobileNumber": mob }));
        }
        function handleSignUp(e) {
            e.preventDefault();
            if (otp == otpR) {
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
            else {
                alert("Wrong Otp entered! Try again");
            }
        }

        return (
            <div>
                <Form onSubmit={generateOtp}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input disabled={isOtpS} type="text" name="name" required id="name" onChange={e => setName(e.target.value)} placeholder="Enter your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mob">Mobile No.</Label>
                        <Input type="text" name="mob" required id="mob" disabled={isOtpS} onChange={e => setMob(e.target.value)} placeholder="Enter your Mobile Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">4-digit Pin</Label>
                        <Input type="password" name="password" required id="password" disabled={isOtpS} onChange={e => setPass(e.target.value)} placeholder="Enter your Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" disabled={isOtpS} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col className="offset-2" sm="1"><Input type="checkbox" name="tc" id="tc" disabled={isOtpS} onChange={e => setTC(!tc)} /></Col>
                            <Col><Label for="tc">I accept the Terms and Conditions</Label></Col>
                        </Row>
                    </FormGroup>
                    <Button color="primary" className="m-auto" type="submit" disabled={!tc} >Generate OTP</Button>
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
                            {isValidOtp ? <span>Successfully signedUp</span> : <span>Opps! OTP didn't match</span>}
                        </div>
                        :
                        null
                    }

                </Form>
            </div>
        );
    }



    return (
        <div className="col-3">
            <div onClick={toggleModal}>Sign Up</div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody><SignUp /></ModalBody>
            </Modal>
        </div>
    );
}

export default SignUpBtn;