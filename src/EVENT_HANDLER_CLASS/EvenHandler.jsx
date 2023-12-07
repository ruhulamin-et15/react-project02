import React, { useState } from "react";

const EvenHandler = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
};

export default EvenHandler;
