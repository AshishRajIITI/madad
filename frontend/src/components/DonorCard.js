import React from 'react';
import { BiPhoneCall, BiVoicemail } from 'react-icons/bi';
import { Card, Button, CardText, CardBody, Badge, CardFooter } from 'reactstrap';

function DonorCard({ donor }) {
    console.log(donor);
    const user = donor.user;
console.log(user);
    return (
        <div>
            <Card className=" my-card donorHeight" >
                <CardBody className="" >
                    <CardText tag="h5">Facility Provided{'  '}<Badge pill color="warning">{donor.services}</Badge></CardText>
                    <CardText tag="h6">{donor.city.toString().split(" / ").map((v) => <Badge pill color="success">{v}</Badge>)}</CardText>
                     <h6>{donor.extra[0] ? donor.extra[0].key : null}{': '}{donor.extra[0] ? donor.extra[0].value : null}</h6>
                        <h6>{donor.extra[1] ? donor.extra[1].key :null}{':  '}{donor.extra[1] ? donor.extra[1].value : null}</h6>
                    <h6>{donor.organizationName ? donor.organizationName : user.name}</h6>
                    <h6><BiPhoneCall />{'  '}{user.mobileNumber}</h6>
                    <h6>{user.email ? <BiVoicemail /> : null}{' '}{user.email ? user.email : null}</h6>
                    <h6>Updated On: <span>{new Intl.DateTimeFormat('default', {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
          }).format(new Date(Date.parse(donor.updatedAt)))}</span></h6>
                </CardBody>
                <CardFooter className="text-center"><Button block className="mt-auto" color="primary">Active</Button></CardFooter>
            </Card>

        </div>
    );

}
export default DonorCard;