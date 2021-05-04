import React from 'react';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function DonorCard ({donor}){

    return(
        <div>
           
                    <Card className=" my-card" >
                        <CardBody className="" >
                            <CardText>Facilities You Can Provide {donor.availableFacilities.toString().split(" / ").map((v)=><Badge pill color="warning">{v}</Badge>)}</CardText>
                            <CardText>{donor.workingRegion.toString().split(" / ").map((v)=><Badge pill color="success">{v}</Badge>)}</CardText>
                            <CardText>{donor.name ? donor.name : null }</CardText>
                            <CardText>{donor.mobileNumber ? donor.mobileNumber : null}</CardText>
                            <CardText>{donor.email ? donor.email : null}</CardText>
                        </CardBody>
                        <CardFooter className="text-center"><Button className="mt-auto" color="primary">Active/Non-Active</Button></CardFooter>
                    </Card>
                   
        </div>
    );

}
export default DonorCard;