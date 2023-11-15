import React from 'react';
import { useState } from 'react';

export default function MyButton() {
   const [value, setValue] = useState("Click");
   function handleClick (){
    setValue ('X');
   }

  
  return (
    <>
    <button className="square" onClick={handleClick}>{value}</button>
    </>
  )
}
