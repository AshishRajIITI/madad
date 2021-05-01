import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';

import sug from '../resources/city';

function AutoSuggest({text, setText, sug}) {

  const [suggest, setSuggest] =useState([]);
  

  const onTextChange=(e)=>{
    const value = e.target.value;
    let temp =[];
    if(value.length>0){
      temp = sug.filter(v => v.toLowerCase().startsWith(value.toLowerCase()));
    }
    setSuggest(temp);
    setText(value);
  }

  function suggestionSelected(value){
    setText(value);
    setSuggest([]);
    
  }
  const list = suggest.slice(0,5).map((s) =>{
    return(
    <li className="search-li" onClick={()=>suggestionSelected(s)}>{s}</li>
    )})
  return (
    
    <div>
      <Input value={text} onChange={onTextChange} />
      <Label>
      <ul className="search">
      {list}
      </ul>
      </Label>
      
    </div>
  );
}

export default AutoSuggest;