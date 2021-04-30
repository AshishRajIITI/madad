import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function SeekerCard (props){

    return(
        <div>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Requirements</CardTitle>
                <CardTitle tag="h4">City</CardTitle>
                <CardText>Address: kdnvf,sdbkv</CardText>
                <CardText>Mobile:= +91 xxx xxx xxxx</CardText>
                <CardText>Name:=  xyz</CardText>                
                <CardText>Email</CardText>
                <CardText>Any comments</CardText>
                <Button color="secondary"> Request Completed/Non-Completed</Button>
            </Card>
        </div>
    );

}
export default SeekerCard;