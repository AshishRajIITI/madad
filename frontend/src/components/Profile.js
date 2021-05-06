import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardText, Input } from 'reactstrap';

function Profile(props) {
    const user=useSelector((state)=> state.users.user);
    
    const [name, setName]=useState('');
    const [mobileNumber, setMob]=useState('');
    const [email,setEmail]=useState('');
    const [edit, setEdit]=useState(false);
    
    function RenderProfile(){
         return(
             <Card>
                 <CardBody className="row">
                     <CardText className="col-3"><Input disabled={!edit} placeholder={user.name} onChange={(e)=>setName(e.target.value)} /></CardText>
                     <CardText className="col-3"><Input disabled={!edit} placeholder={user.mobileNumber} onChange={(e)=>setMob(e.target.value)} /></CardText>
                     <CardText className="col-3"><Input disabled={!edit} placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} /></CardText>
                     <Button color="warning" className="col-1" onClick={()=>setEdit(!edit)}><BiEditAlt /></Button>
                 </CardBody>
             </Card>
         )
     }
    return (
        <div>
            <RenderProfile />
        </div>
    );
}

export default Profile;