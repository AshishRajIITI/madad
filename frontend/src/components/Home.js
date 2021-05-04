import React, { useState } from "react";
import { Card, CardHeader, CardImg, Modal, ModalBody, ModalHeader } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
import network from './images/network.jpg';
import pmCaresImage from './images/donate1.jpg';
import cmCaresImage from './images/donate2.jpg';
import soodFoundation from './images/donate3.jpg';
import akshayPatra from './images/donate4.jpg';
import step1 from "./images/step1.jpg";
import step2 from "./images/step2.jpg";
import step3 from "./images/step3.jpg";
import step5 from "./images/step5.jpg";
import step6 from "./images/step6.jpg";

import MyCarousel from "./MyCarousel";


const Home = () => {

    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const toggleModal1 = () => {
        setmodal1(!modal1);
    }
    const toggleModal2 = () => {
        setmodal2(!modal2);
    }

    return (
        <div className="container ">
            <div className="row align-items-center">
                <div id="homeText" className=" col-12 col-md-5 text-wrap align-middle">
                    <div className="line2 h1 p-3">A Students' Gymkhana, IIT Indore initiative to connect covid affected people to verified relief resources. Let's defeat COVID-19 together.</div>
                </div>

                <div>
                    <h1 id="help" className="text-center mt-5" >Help Them to Help You</h1>
                    <br />
                </div>
                <div className="row mt-2 justify-content-center">

                    <div className=" col-12 col-md-3 my-2 ">
                        <a href="https://www.pmcares.gov.in/en/web/contribution/donate_india" rel="noreferrer" target="_blank">
                            <Card className=" donationCard">
                                <CardImg top width="100%" src={pmCaresImage} alt="Card image cap" />
                            </Card>
                        </a>
                    </div>
                    <div className="col-12 col-md-3 my-2">
                        <a href="https://www.bhimupi.org.in/donation-digitized-with-bhim-upi" rel="noreferrer" target="_blank">
                            <Card className=" donationCard">
                                <CardImg top width="100%" src={cmCaresImage} alt="Card image cap" />
                            </Card>
                        </a>
                    </div>
                    <div className=" col-12 col-md-3 my-2">
                        <a href="https://www.instamojo.com/@soodcharityfoundation/lcbf43d4ae0824ea4a4118175cd8e9d28/" rel="noreferrer" target="_blank">
                            <Card className=" donationCard">
                                <CardImg top width="100%" src={soodFoundation} alt="Card image cap" />
                            </Card>
                        </a>
                    </div>
                    <div className=" col-12 col-md-3 my-2">
                        <a href="https://www.akshayapatra.org/covid-relief-services" rel="noreferrer" target="_blank">
                            <Card className=" donationCard">
                                <CardImg top width="100%" src={akshayPatra} alt="Card image cap" />
                            </Card>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Home;