import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function DonorCard (props){

    return(
        <div>
            <Card body inverse color="warning">
                <CardTitle tag="h5">Facilities you could Provide</CardTitle>
                <CardTitle tag="h4">Working Area</CardTitle>
                <CardText>Name:=  xyz</CardText>
                <CardText>Mobile:= +91 xxx xxx xxxx</CardText>
                <CardText>Email</CardText>
                <CardText>Any comments</CardText>
                <Button color="secondary">Active/Non-Active</Button>
            </Card>
        </div>
    );

}
export default DonorCard;