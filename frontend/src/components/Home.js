import React from "react";

import { Button, Card, CardText, CardTitle } from 'reactstrap';


import { useHistory } from "react-router";

import MyCarousel from "./MyCarousel";

import Example from "./Carousal";
import { Link } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const seekerReg = () => {
        history.push('/seekerReg');
    }
    const donorReg = () => {
        history.push('/donorReg');
    }
    const handleDonate = () => {
        history.push("/donate");
    }
    return (
        <div className="container-fluid">
            {/* <div className="row text-center">
                <img className="" width="100%" alt="" src={lp}></img>
            </div> */}

            <div className="row mt-1 align-item-center justify-content-center">
                <div className="col-12 col-md-6">
                    <Example />
                </div>
                <div className="col-12 col-md-12 m-auto">
                    <div className="row mt-5 align-item-center justify-content-center">
                        <div className="col-12 col-md-3 ">
                            <Button color="primary" onClick={donorReg} className="btn btn-lg mt-2 pt-2 pb-2" block>
                                Want to Help
                    </Button>
                        </div>
                        <div className="col-12 col-md-3">
                            <Button color="primary" className='btn btn-lg mt-2 pt-2 pb-2' block onClick={seekerReg}>
                                Need Help
                    </Button>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-4">

                </div>
            </div>
            <div className="row mt-1 align-item-center justify-content-center">
                <Card className="col-3 navCard">
                    <CardText className="navCardtext">Looking for Authorised Covid relief Leads?</CardText>
                    <h3>Help-Providers</h3>
                </Card>
                <Card className="col-3 navCard">
                    <CardText>Wishing to help someone?</CardText>
                    <CardTitle>Help-Seekers</CardTitle>
                </Card>
            
                <Card className="col-3 navCard">
                    <CardText>Verified Doctors Cansultance</CardText>
                    <CardTitle>Doctor</CardTitle>
                </Card>
            
                <Card className="col-3 navCard">
                    <CardText>Loosing your hope? Get </CardText>
                    <CardTitle>volunteers</CardTitle>
                </Card>
            </div>

            <div className="carousel col-12 col-md-12 justify-content-center">
                <MyCarousel />
            </div>
            <div className="row mt-5 justify-content-center  donateCard">
                <div className="m-auto">
                    <Button onClick={handleDonate} color="warning" className="btn-donate">Donate Now</Button>
                </div>

            </div>

        </div>
    );
}
export default Home;