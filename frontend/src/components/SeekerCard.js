import React from 'react';
import { Card, Button, CardText, CardBody } from 'reactstrap';

function SeekerCard ({seeker}){

    return(
        <div>
            <Card className="seeker-card" color="primary">
                <CardBody className="seeker-card-body">
                <CardText tag="h5">Requirements: {seeker.requirements}</CardText>
                <CardText tag="h6">{seeker.city}</CardText>
                <CardText>Address: {seeker.address}</CardText>
                <CardText>Mobile:= {seeker.mobileNumber}</CardText>
                <CardText>Name:=  {seeker.name}</CardText>                
                <CardText>{seeker.email}</CardText>
                <CardText>{seeker.comments}</CardText>
                <Button className="justify-center" color="success"> Status</Button>
                </CardBody>
            </Card>
        </div>
    );

}
export default SeekerCard;