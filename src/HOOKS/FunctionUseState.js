import React, {useState} from 'react'

const FunctionUseState = () => {

    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count => count + 1)
    };
    
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default FunctionUseState;
