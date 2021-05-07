
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardText, Button } from 'reactstrap';

function Noresult({type}) {

const history = useHistory();
    const donorReg = () => {
        history.push('/donorReg');
    }
    const seekerReg = () => {
        history.push('/seekerReg');
    }
    return (
        <div className="container">
            <div>
                <Card className="text-center">
                    <CardText>We currently do not have any data on this</CardText>
                    <CardText><Button onClick={()=>{type==="3" ? seekerReg() : donorReg() }}>{type==="3" ? "Want to help" : "Need help"}</Button></CardText>
                    <CardText>Or</CardText>
                    <CardText className="mb-2">Check other third party information sources, <Link to="/extraRes">here</Link></CardText>
                </Card>
            </div>
        </div>
    );
}

export default Noresult;