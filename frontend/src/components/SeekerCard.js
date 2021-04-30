import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function SeekerCard ({seeker}){

    return(
        <div>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Requirements</CardTitle>
                <CardTitle tag="h4">city</CardTitle>
                <CardText>Address: kdnvf,sdbkv</CardText>
                <CardText>Mobile:= {seeker.mobileNumber}</CardText>
                <CardText>Name:=  {seeker.name}</CardText>                
                <CardText>{seeker.email}</CardText>
                <CardText>Any comments</CardText>
                <Button color="secondary"> Request Completed/Non-Completed</Button>
            </Card>
        </div>
    );

}
export default SeekerCard;