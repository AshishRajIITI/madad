import React, { useState } from 'react';
import { Card, CardHeader } from 'reactstrap';
import Donors from './Donors'
import facilities from '../resources/facilty'

function Provider(props) {
    const [where, setWhere] = useState('');
    const facility = facilities.map((v) => {
        return (
                <Card className="col-12 col-sm-3"  onClick={() => setWhere(v)}>
                    <CardHeader>{v}</CardHeader>
                </Card>
        )
    });
    if (where.length > 0) {
        return (
            <Donors where={where} />
        )
    }
    else {
        return (
            <div className="container">

                <div className="row">
                    {facility}
                </div>

            </div>
        );
    }
}

export default Provider;