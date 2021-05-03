import React from 'react';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function DonorCard ({donor}){

    return(
        <div>
           
                    <Card className=" my-card" >
                        <CardBody className="" >
                            <CardText tag="h5">Facilities You Can Provide {donor.availableFacilities.toString().split(" / ").map((v)=><Badge pill color="warning">{v}</Badge>)}</CardText>
                            <CardText tag="h6">{donor.workingRegion.toString().split(" / ").map((v)=><Badge pill color="success">{v}</Badge>)}</CardText>
                            <CardText>Name:{donor.name}</CardText>
                            <CardText>Mobile Number: {donor.mobileNumber}</CardText>
                            <CardText>Email:{donor.email}</CardText>
                            <CardText>Comment: {donor.comments}</CardText>
                            
                        </CardBody>
                        <CardFooter className="text-center"><Button className="mt-auto" color="primary">Active/Non-Active</Button></CardFooter>
                    </Card>
                   
        </div>
    );

}
export default DonorCard;