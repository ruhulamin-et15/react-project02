import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseState;
