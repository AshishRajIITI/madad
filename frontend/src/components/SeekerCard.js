import React from 'react';
import { BiPhoneCall, BiVoicemail } from 'react-icons/bi';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function SeekerCard({ seeker }) {
    const user = seeker.user;
    return (
        <div>
            <Card className="my-card">
                <CardBody className="">
                    <CardText tag="h5">Requirements: <Badge pill color="warning">{seeker.services}</Badge></CardText>
                    <CardText tag="h6"><Badge pill color="success">{seeker.city}</Badge></CardText>
                    <CardText>
                        {seeker.comment ? "Description" : null}
                        {seeker.comment ? seeker.comment : null}
                    </CardText>
                    <CardText> {user.name ? user.name : null}</CardText>
                    <CardText>
                        <dl className="row">
                            <dt className="col-1"><BiPhoneCall /></dt>
                            <dd className="col-4">{user.mobileNumber ? user.mobileNumber : <span>Akash</span>}</dd>
                            <dt className="col-1">{user.email ? <BiVoicemail /> : null}</dt>
                            <dd className="col-5">{user.email ? user.email: null}</dd>
                        </dl>
                    </CardText>
                </CardBody>
                <CardFooter className="text-center"><Button className="justify-center" block color="warning"> Need Help </Button></CardFooter>
            </Card>
        </div>
    );

}
export default SeekerCard;