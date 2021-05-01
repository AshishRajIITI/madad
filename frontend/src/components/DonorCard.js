import React from 'react';
import { Card, Button, CardText, CardBody } from 'reactstrap';

function DonorCard ({donor}){

    return(
        <div>
           
                    <Card className="donor-card">
                        <CardBody className="my-card" >
                            <CardText tag="h5">Facilities You Can Provide {donor.availableFacilities}</CardText>
                            <CardText tag="h6">{donor.workingRegion}</CardText>
                            <CardText>Name:{donor.name}</CardText>
                            <CardText>Mobile Number: {donor.mobileNumber}</CardText>
                            <CardText>Email:{donor.email}</CardText>
                            <CardText>Comment: {donor.comments}</CardText>
                            <Button className="mt-auto" color="primary">Active/Non-Active</Button>
                        </CardBody>
                    </Card>
                   
        </div>
    );

}
export default DonorCard;