import React, { useState } from "react";
import {  Card, CardBody,CardTitle, CardHeader, CardImg, Modal, ModalBody, ModalHeader } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
import network from './images/network.jpg';
import pmCaresImage from './images/pmCaresDonateImg.jpg';
import cmCaresImage from './images/cmCaresDonateImg.jpg';
import soodFoundation from './images/soodFoundation.png';
import akshayPatra from './images/akshyPatraFoundation.jpg';
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
                <div className="col-12 col-md-7 ">
                    <img src={network} width="100%" height="auto" alt="" />
                </div>
            </div>
            <div className="row mt-5 home-div align-item-center justify-content-center">
                <div className="col-12 col-md-6 h-700">
                    <Card onClick={toggleModal1} className="m-card">
                        <CardHeader>Want to Help</CardHeader>
                    </Card>
                </div>
                <Modal isOpen={modal1} toggle={toggleModal1} >
                    <ModalHeader>Provider Registration</ModalHeader>
                    <ModalBody><DonorForm toggleModal={toggleModal1} /></ModalBody>
                </Modal>
                <div className="col-12 col-md-6 h-700 home-seeker">
                    <Card className='m-card' onClick={toggleModal2}>
                        <CardHeader>Need Help</CardHeader>
                    </Card>

                </div>
                <Modal isOpen={modal2} toggle={toggleModal2} >
                    <ModalHeader>Seeker Registration</ModalHeader>
                    <ModalBody><SeekerForm toggleModal={toggleModal2} /></ModalBody>
                </Modal>
            </div>
            <div>
              <h1  id="help" className="text-center mt-5" >Help Them to Help You</h1>
              <br />
            </div>
            <div className="row mt-2 justify-content-center">

                <div className=" col-12 col-md-3 my-2 ">
                <a href="https://www.pmcares.gov.in/en/web/contribution/donate_india" rel="noreferrer" target="_blank">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={pmCaresImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-center" tag="h5">PM-Cares</CardTitle>                           
                        </CardBody>
                    </Card>
                    </a>
                </div>
                <div className="col-12 col-md-3 my-2">
                <a href="https://www.bhimupi.org.in/donation-digitized-with-bhim-upi" rel="noreferrer" target="_blank">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={cmCaresImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle  className="text-center" tag="h5">State List</CardTitle>                           
                        </CardBody>
                    </Card>
                    </a>
                </div>
                <div className=" col-12 col-md-3 my-2">
                    <a href="https://www.instamojo.com/@soodcharityfoundation/lcbf43d4ae0824ea4a4118175cd8e9d28/" rel="noreferrer" target="_blank">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={soodFoundation} alt="Card image cap" />
                        <CardBody>
                            <CardTitle  className="text-center" tag="h5">Sood-Foundation</CardTitle>                           
                        </CardBody>
                    </Card>
                    </a>
                </div>
                <div className=" col-12 col-md-3 my-2">
                    <a href="https://www.akshayapatra.org/covid-relief-services" rel="noreferrer" target="_blank">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={akshayPatra} alt="Card image cap" />
                        <CardBody>
                            <CardTitle  className="text-center" tag="h5">Akshay Patra</CardTitle>                           
                        </CardBody>
                    </Card>
                    </a>
                </div>
            </div>
            {/* <div>
                <Carousal />
            </div> */}
        </div>
    );
}
export default Home;