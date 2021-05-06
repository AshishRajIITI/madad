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
                    <h6>
                        {seeker.comment ? "Description" : null}
                        {seeker.comment ? seeker.comment : null}
                    </h6>
                    <h6> {user.name ? user.name : null}</h6>
            <h6><BiPhoneCall />{' '}{user.mobileNumber ? user.mobileNumber : null}</h6>
            <h6>{user.email ? <BiVoicemail /> : null}{'  '}{user.email ? user.email: null}</h6>
            <h6>Updated On: <span>{new Intl.DateTimeFormat('default', {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
          }).format(new Date(Date.parse(seeker.updatedAt)))}</span></h6>
                </CardBody>
                <CardFooter className="text-center"><Button className="justify-center" block color="warning"> Active </Button></CardFooter>
            </Card>
        </div>
    );

}
export default SeekerCard;