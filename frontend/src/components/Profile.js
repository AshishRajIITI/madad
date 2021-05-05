import React from 'react';
import { useSelector } from 'react-redux';

function Profile(props) {
    const user=useSelector((state)=> state.users.user);
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
        </div>
    );
}

export default Profile;