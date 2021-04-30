import React, { useState } from "react";
import { Button, Card, CardBody, Modal, ModalBody, ModalHeader } from 'reactstrap';

const Home = () => {
    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);

    return (
        <div className="container-fluid ">
            <div className="row home-div">
                <div className="col-12 col-md-6 h-700">
                    <Card className="m-card">
                        <CardBody>
                            Want to be
                            <Button onClick={() => { setmodal1(!modal1) }}>Donor</Button> ?
                        </CardBody>
                    </Card>
                </div>
                <Modal isOpen={modal1} toggle={() => { setmodal1(!modal1) }} >
                    <ModalHeader>Donor Registration</ModalHeader>
                    <ModalBody>Form</ModalBody>
                </Modal>
                <div className="col-12 col-md-6 h-700 home-seeker">
                    <Card className='m-card'>
                        <CardBody>
                            Want to be
                            <Button onClick={() => { setmodal2(!modal2) }}>Seeker</Button> ?
                        </CardBody>
                    </Card>

                </div>
                <Modal isOpen={modal2} toggle={() => { setmodal2(!modal2) }} >
                    <ModalHeader>Seeker Registration</ModalHeader>
                    <ModalBody>Form</ModalBody>
                </Modal>
            </div>
        </div>
    );
}
export default Home;