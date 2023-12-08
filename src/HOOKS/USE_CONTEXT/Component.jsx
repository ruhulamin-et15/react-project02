import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";

const Component = () => {
  const [user, setUser] = useState({ id: 101, name: "Ruhul Amin" });
  const [text, setText] = useState({ id: 102, name: "Hi i am text" });
  return (
    <div>
      <UserContext.Provider value={{ user, text }}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component;
