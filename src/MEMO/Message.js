import React, { memo, useMemo } from 'react';

const Message = ({numberOfMessages, onHandleIncrement}) => {
  console.log("message rendering");

    const calculatedNumber = useMemo(()=> {
    let number = 0;
    for (let index = 0; index <5000000000; index++){number++;}
    return number;
    },[]);


return (
  <div>
      <h3>Number: {calculatedNumber}</h3>
      <p>Send {numberOfMessages} Message</p>
      <button onClick={onHandleIncrement}>Increment Message Number</button>
  </div>
)
};

export default memo(Message);