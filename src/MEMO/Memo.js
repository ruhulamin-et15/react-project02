import React, { useCallback, useState } from 'react';
import Message from './Message';

const Memo = () => {
    console.log("app rendering");
    const [count , setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const handleIncrementMessage = useCallback(() => {
      setCount(count + 1)
    }, [count]);

  return (
    <div>
        {toggle? "On" : "Off"}
        <button onClick={() => {setToggle(!toggle)}}>Toggle</button>

        <h2>Count: {count}</h2>
        <button onClick={() => {
            setCount((count) => count + 1)
        }}>Increment</button>

        <Message numberOfMessages={count} onHandleIncrement={handleIncrementMessage}/>
    </div>
  )
};

export default Memo;