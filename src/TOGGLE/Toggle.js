import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet,
          odio molestias veritatis molestiae unde
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
