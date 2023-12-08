import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Component2 = () => {
  const { user, text } = useContext(UserContext);
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{text.id}</p>
      <p>{text.name}</p>
    </div>
  );
};

export default Component2;
