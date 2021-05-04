import React, { useState } from "react";
import {  Card, CardHeader, CardImg, Modal, ModalBody, ModalHeader } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
import network from './images/network.jpg';
import pmCaresImage from './images/donate1.jpg';
import cmCaresImage from './images/donate2.jpg';
import soodFoundation from './images/donate3.jpg';
import akshayPatra from './images/donate4.jpg';
import step1  from "./images/step1.jpg";
import step2  from "./images/step2.jpg";
import step3  from "./images/step3.jpg";
import step5  from "./images/step5.jpg";
import step6  from "./images/step6.jpg";

import MyCarousel from "./MyCarousel" ;


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
                    <div className="line2 h1">An IIT Indore Initiative to connect covid affected people to verified relief resources. Let's defeat COVID-19 together.</div>
                </div>
                {/* <div className="col-12 col-md-7 ">
                    <img src={network} width="100%" height="auto" alt="" />
                </div> */}
            </div>
            <div className="row mt-5 home-div align-item-center justify-content-left">
                <div className="col-12 col-md-4 h-700">
                    <Card style={{ 'background-color': '#7188FF', fontSize:'large'}} onClick={toggleModal1} className="m-card">
                        <CardHeader className="click-card">Be A Helper</CardHeader>
                    </Card>
                </div>
                <Modal isOpen={modal1} toggle={toggleModal1} >
                    <ModalHeader>Provider Registration</ModalHeader>
                    <ModalBody><DonorForm toggleModal={toggleModal1} /></ModalBody>
                </Modal>
                <div className="col-12 col-md-4 h-700 home-seeker">
                    <Card  style={{ 'background-color': '#7188FF', fontSize:'large'}} className='m-card' onClick={toggleModal2}>
                        <CardHeader className="click-card">Need Help</CardHeader>
                    </Card>

                </div>
                <Modal isOpen={modal2} toggle={toggleModal2} >
                    <ModalHeader>Seeker Registration</ModalHeader>
                    <ModalBody><SeekerForm toggleModal={toggleModal2} /></ModalBody>
                </Modal>
            </div>

        
           
         <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <MyCarousel />
                
                <br/>
            </div>
{/* 
            <div className= "row mt-2 justify-content-center">
                <div className="col-12 col-md-4">
                    <Card className=" donationCard">
                            <CardImg top width="100%" src={step1} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card className=" donationCard">
                            <CardImg top width="100%" src={step2} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card className=" donationCard">
                            <CardImg top width="100%" src={step3} alt="Card image cap" />
                    </Card>
                </div>

            </div>
            <div className= "row mt-2 justify-content-center">
                
                <div className="col-12 col-md-4">
                    <Card className=" donationCard">
                            <CardImg top width="100%" src={step5} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card className=" donationCard">
                            <CardImg top width="100%" src={step6} alt="Card image cap" />
                    </Card>
                </div> 
 
            </div>  */}
            
            
            <div>
            <br />
            <br />
              <h1  className=" help text-center mt-5" >Help Them to Help You</h1>
              <br />
            </div>
            <div className="row mt-2 justify-content-center">

                <div className=" col-12 col-md-3 ">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={pmCaresImage} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-12 col-md-3 ">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={cmCaresImage} alt="Card image cap" />
                    </Card>
                </div>
                <div className=" col-12 col-md-3 ">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={soodFoundation} alt="Card image cap" />
                    </Card>
                </div>
                <div className=" col-12 col-md-3 ">
                    <Card className=" donationCard">
                        <CardImg top width="100%" src={akshayPatra} alt="Card image cap" />
                    </Card>
                </div>
            </div>
            {/* <div>
                <Carousal />
            </div> */}
        </div>
    );
}
export default Home;