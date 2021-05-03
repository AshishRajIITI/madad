import React, { useState } from "react";
import { Button, Card, CardBody, Modal, ModalBody, ModalHeader } from 'reactstrap';
import DonorForm from "./DonorForm";
import SeekerForm from "./SeekerForm";
import donor from './images/donor.gif';
import seeker from './images/seeker.gif';

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
        <div className="container-fluid ">
            <div className="row home-div">
                <div className="col-12 col-md-6 h-700">
                    <Card className="m-card">
                        <CardBody>
                            <img src={donor} alt='' height="80%" width="80%" />
                            <Button block className="btn-lg text-center py-2" color="warning" onClick={toggleModal1} >Provide Help</Button>

                        </CardBody>
                    </Card>
                </div>
                <Modal isOpen={modal1} toggle={toggleModal1} >
                    <ModalHeader>Provider Registration</ModalHeader>
                    <ModalBody><DonorForm toggleModal={toggleModal1} /></ModalBody>
                </Modal>
                <div className="col-12 col-md-6 h-700 home-seeker">
                    <Card className='m-card'>
                        <CardBody>
                            <img src={seeker} alt='' height="80%" width="80%" />
                            <Button block onClick={toggleModal2} className="btn-lg text-center py-2" color="success" >Need Help</Button>

                        </CardBody>
                    </Card>

                </div>
                <Modal isOpen={modal2} toggle={toggleModal2} >
                    <ModalHeader>Seeker Registration</ModalHeader>
                    <ModalBody><SeekerForm toggleModal={toggleModal2} /></ModalBody>
                </Modal>
            </div>
            
        </div>
    );
}
export default Home;