import React, { useState } from "react";

const FunctionUseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increament1</button>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment2
      </button>
      <button
        onClick={() => {
          setCount((count) => 0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default FunctionUseState;
