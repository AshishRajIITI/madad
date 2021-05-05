import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Minor({ service }) {
    function Oxygen() {

        return (
            <Button></Button>
        )
    }
    function Plasma() {
        return (
            <Button></Button>
        )
    }
    function Def() {
        return (
            <div>default</div>
        )
    }

    switch (service) {
        case "OxygenCylinder":
            return (
                <Oxygen />
            );
        case "Plasma":
            return (
                <Plasma />
            );
        default:
            return (
                <Def />
            );
    }
}

export default Minor;