import React, { useState, useEffect } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardText, CustomInput, Input, Button, Row, Col, FormGroup, Form } from 'reactstrap';
import {fetchDonor} from '../redux/ActionCreators';
function Profile(props) {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDonor());
    }, [dispatch]);
    const donorAuth = user.donorAuth;
    const donorNonAuth = useSelector(state=>state.donorReducer.donors);
    const seeker = user.seeker;
    

    const [name, setName] = useState('');
    const [mobileNumber, setMob] = useState('');
    const [email, setEmail] = useState('');
    const [edit, setEdit] = useState(false);
    console.log(name, mobileNumber, email);

    function RenderProfile() {
        return (
            <Card>
                <CardBody className="row">
                    <CardText className="col-4"><Input disabled={!edit} placeholder={user.name} onChange={(e) => setName(e.target.value)} /></CardText>
                    <CardText className="col-3"><Input disabled placeholder={user.mobileNumber} onChange={(e) => setMob(e.target.value)} /></CardText>
                    <CardText className="col-4"><Input disabled={!edit} placeholder={user.email} onChange={(e) => setEmail(e.target.value)} /></CardText>
                    <CardText className="col-1"><Button color="warning" onClick={() => setEdit(!edit)}><BiEditAlt /></Button></CardText>
                </CardBody>
            </Card>
        )
    }
    function RenderCard({d}) {
        const [act, setAct]=useState(d.isActive);

        const handleAct=()=>{
    setAct(!act);
    //dispatch(updateAct(v));
    console.log("update request ", act);
        }
        return (
            <dl className="row">
                <dt className="col-3">{d.services}</dt>
                <dt className="col-6">{d.city}</dt>
                <dt className="col-2"><Form><FormGroup><CustomInput type="switch" name="act" id={d._id}  checked={act} onChange={handleAct} label={act ? "Active" : "Non-Active"} /></FormGroup></Form></dt>
            </dl>
        )
    }
    function RenderDonorNonAuth() {
        if (donorNonAuth !== null) {
            if(donorNonAuth.length<1){
                return (
                    <h5>No service</h5>
                )
            }
            const d = donorNonAuth.map((d) => {
                return (
                    <RenderCard d={d} />
                )
            })
            return (
                <div>{d}</div>
            )
        }
        else {
            return (
                <h5>No service</h5>
            )
        }
    }
    function RenderDonorAuth() {
        if (donorAuth === null) {
            if(donorAuth.length<1){
                return (
                    <h5>No Verified service</h5>
                )
            }
            const d = donorAuth.map((d) => {
                return (
                    <RenderCard d={d} />
                )
            })
            return (
                <h5>{d}</h5>
            )
        }
        else {
            return (
                <h5>No Verified service</h5>
            )
        }
    }
    function RenderSeeker() {
        if (seeker !== null) {
            if(seeker.length<1){
                return (
                    <h5>No request</h5>
                )
            }
            const d = seeker.map((d) => {
                return (
                    <RenderCard d={d} />
                )
            })
            return (
                <h5>{d}</h5>
            )
        }
        else {
            return (
                <h5>No request</h5>
            )
        }
    }
    function RenderTab() {
        const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
        }

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className=""
                            onClick={() => { toggle('1'); }}
                        >
                            Your Verified Services
                </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className=""
                            onClick={() => { toggle('2'); }}
                        >
                            Your Services
                </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className=""
                            onClick={() => { toggle('3'); }}
                        >
                            Your Requests
                </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <RenderDonorNonAuth />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <RenderDonorAuth />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <RenderSeeker />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
    return (
        <div className="container">
            <RenderProfile />
            <RenderTab />
        </div>
    );
}

export default Profile;


