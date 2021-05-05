import React from 'react';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function SeekerCard({ seeker }) {

    return (
        <div>
            <Card className="my-card">
                <CardBody className="">
                    <CardText tag="h5">Requirements: <Badge pill color="warning">{seeker.services}</Badge></CardText>
                    <CardText tag="h6"><Badge pill color="success">{seeker.city}</Badge></CardText>
                    <CardText> {seeker.name ? seeker.name : null}</CardText>
                    <CardText>{seeker.mobileNumber ? seeker.mobileNumber : null }</CardText>
                    <CardText>{seeker.email ? seeker.email : null}</CardText>
                    <CardText>{seeker.address ? seeker.address : null}</CardText>
                </CardBody>
                <CardFooter className="text-center"><Button className="justify-center" block color="success"> Status</Button></CardFooter>
            </Card>
        </div>
    );

}
export default SeekerCard;