import React, { useState } from "react";
import { Card, CardBody, CardHeader, Modal, ModalBody, ModalHeader } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
// import donor from './images/donor.gif';
// import seeker from './images/seeker.gif';
import network from './images/network.jpg';
//import Carousal from "./Carousal";

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
                <div className="col-12 col-md-5 text-wrap align-middle">
                    <div className="line2 fs-6">An IIT Indore Initiative to connect covid affected people to verified relief sources</div>
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
            <h1 className="text-center mt-5" >Donate to</h1>
            <div className="row mt-2 justify-content-center">

                <div className="col-12 col-md-3 ">
                    <Card className="m-card">
                        <CardBody>PM fund</CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-3 ">
                    <Card className="m-card">
                        <CardBody>CM fund</CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-3 ">
                    <Card className="m-card">
                        <CardBody>RobinHood</CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-3 ">
                    <Card className="m-card">
                        <CardBody>PM fund</CardBody>
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