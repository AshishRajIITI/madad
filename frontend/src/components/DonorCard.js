import React from 'react';
import { BiPhoneCall, BiVoicemail } from 'react-icons/bi';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function DonorCard({ donor }) {
    const user = donor.user;

    return (
        <div>

            <Card className=" my-card" >
                <CardBody className="" >
                    <CardText tag="h5">Facility Provided<Badge pill color="warning">{donor.services}</Badge></CardText>
                    <CardText tag="h6">{donor.city.toString().split(" / ").map((v) => <Badge pill color="success">{v}</Badge>)}</CardText>
                 <CardText>
                        <dl className="row">
                            <dt className="col-4">{donor.extra[0] ? donor.extra[0].key : null}</dt>
                            <dd className="col-8">{donor.extra[0] ? donor.extra[0].value : null}</dd>
                            <dt className="col-4">{donor.extra[1] ? donor.extra[1].key :null}</dt>
                            <dd className="col-8">{donor.extra[1] ? donor.extra[1].value : null}</dd>
                        </dl>
                    </CardText>
                    
                    <CardText>{user.name ? user.name : null}</CardText>
                    <CardText>{donor.organizationName ? donor.organizationName : null}</CardText>
                    <CardText>
                        <dl className="row">
                            <dt className="col-1"><BiPhoneCall /></dt>
                            <dd className="col-4">{user.mobileNumber}</dd>
                            <dt className="col-1">{user.email ? <BiVoicemail /> : null}</dt>
                            <dd className="col-5">{user.email ? user.email : null}</dd>
                        </dl>
                    </CardText>
                </CardBody>
                <CardFooter className="text-center"><Button block className="mt-auto" color="primary">Active</Button></CardFooter>
            </Card>

        </div>
    );

}
export default DonorCard;