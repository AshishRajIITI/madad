import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

function SeekerCard ({seeker}){

    return(
        <div>
            <Card className="seeker-card" color="primary">
                <CardBody className="seeker-card-body">
                <CardText tag="h5">Requirements</CardText>
                <CardText tag="h6">city</CardText>
                <CardText>Address: kdnvf,sdbkv</CardText>
                <CardText>Mobile:= {seeker.mobileNumber}</CardText>
                <CardText>Name:=  {seeker.name}</CardText>                
                <CardText>{seeker.email}</CardText>
                <CardText>Any comments</CardText>
                <Button className="justify-center" color="success"> Status</Button>
                </CardBody>
            </Card>
        </div>
    );

}
export default SeekerCard;