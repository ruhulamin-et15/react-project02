import React, {useEffect, useState} from "react";
import './Dynamic.css'

function Dynamic() {

  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if(name.length < 2){
      setValidInput(false)
    }else{
      setValidInput(true)
    }
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} className={`${validInput ?"valid" : "invalid"}`} autoFocus/>
    </div>
  );
}

export default Dynamic;