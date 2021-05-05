import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardImg, Modal, ModalBody, ModalHeader, CardText } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
import vaccineImage from './images/vaccine-image.jpg'
import pmCaresImage from './images/pmCaresDonateImg.jpg';
import cmCaresImage from './images/cmCaresDonateImg.jpg';
import soodFoundation from './images/soodFoundation.png';
import akshayPatra from './images/akshyPatraFoundation.jpg';
import registerImg from './images/register.jpg';
import searchImg from './images/search.jpg';
import connectImg from './images/connect.jpg';
import donateImg from './images/donate.jpg';
import authorizedImg from './images/authorized.jpg';
import servicesImg from './images/services.jpg';
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
        <div className="container">
            <div className="row align-items-center m-3">
                <div className="main-text col-12 pr-3 col-lg-6 text-wrap align-middle">
                    <p className="text-center">An IIT Indore initiative, by Students' Gymkhana,  to connect covid affected people to verified relief resources. Let's defeat COVID-19 together.</p>
                    <div className="buttons">
                        <p onClick={toggleModal1} className="btn btn-primary">
                            Be a helper
                            </p>
                        <p className='btn btn-primary' onClick={toggleModal2}>
                            Need Help
                            </p>
                        <Modal isOpen={modal1} toggle={toggleModal1} >
                            <ModalHeader>Provider Registration</ModalHeader>
                            <ModalBody><DonorForm toggleModal={toggleModal1} /></ModalBody>
                        </Modal>
                        <Modal isOpen={modal2} toggle={toggleModal2} >
                            <ModalHeader>Seeker Registration</ModalHeader>
                            <ModalBody><SeekerForm toggleModal={toggleModal2} /></ModalBody>
                        </Modal>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={vaccineImage} width="100%" height="auto" alt="" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top height="250" width="100%" src={registerImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Register</CardTitle>
                            <CardText className="cardText">Register on the portal to get required help in no time</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top width="100%" height="250" src={searchImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Search</CardTitle>
                            <CardText className="cardText">Quick Search the required help by connecting with 100+ people</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top height="250" width="100%" src={connectImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Connect</CardTitle>
                            <CardText className="cardText">Our team will help you in connecting with the helper</CardText>
                        </CardBody>
                    </Card>
                </div>
                {/* </div> */}
                {/* <div className="row mt-5"> */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top height="250" width="100%" src={authorizedImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Authorize</CardTitle>
                            <CardText className="cardText">Our team will keep track of verified resources</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top width="100%" height="250" src={servicesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Services</CardTitle>
                            <CardText className="cardText">Plasma, Blood, Oxygen, Food, Medicine and more</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="card-height">
                        <CardImg top height="250" width="100%" src={donateImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h2">Donate</CardTitle>
                            <CardText className="cardText">Help our nation by donating into the funds</CardText>
                        </CardBody>
                    </Card>
                </div>
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
                                <CardTitle className="text-center" tag="h5">State List</CardTitle>
                            </CardBody>
                        </Card>
                    </a>
                </div>
                <div className=" col-12 col-md-3 my-2">
                    <a href="https://www.instamojo.com/@soodcharityfoundation/lcbf43d4ae0824ea4a4118175cd8e9d28/" rel="noreferrer" target="_blank">
                        <Card className=" donationCard">
                            <CardImg top width="100%" src={soodFoundation} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-center" tag="h5">Sood-Foundation</CardTitle>
                            </CardBody>
                        </Card>
                    </a>
                </div>
                <div className=" col-12 col-md-3 my-2">
                    <a href="https://www.akshayapatra.org/covid-relief-services" rel="noreferrer" target="_blank">
                        <Card className=" donationCard">
                            <CardImg top width="100%" src={akshayPatra} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-center" tag="h5">Akshay Patra</CardTitle>
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