import React from 'react';
import {Spinner} from 'reactstrap';

function Loading(props) {
    return (
        <div className="loading align-middle">
            <Spinner color="light" />
        </div>
    );
}

export default Loading;