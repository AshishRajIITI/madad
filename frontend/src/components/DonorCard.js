import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function DonorCard ({donor}){

    return(
        <div>
            <Card body inverse color="warning">
                <CardTitle tag="h5">Facilities you could Provide</CardTitle>
                <CardTitle tag="h4">{donor.workingRegion}</CardTitle>
                <CardText>{donor.name}</CardText>
                <CardText>Mobile:= {donor.mobileNumber}</CardText>
                <CardText>{donor.email}</CardText>
                <CardText>Any comments</CardText>
                <Button color="secondary">Active/Non-Active</Button>
            </Card>
        </div>
    );

}
export default DonorCard;