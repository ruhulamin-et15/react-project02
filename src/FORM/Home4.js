import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import View from "./View";
import style from "./home4.module.css";

const Home4 = () => {
  const [view, setView] = useState([]);

  const handleAddInfo = (info) => {
    setView((prevInfo) => {
      return [...prevInfo, { id: uuidv4(), info }];
    });
  };

  const handleRemoveInfo = (id) => {
    setView((prevView) => {
      const filteredView = prevView.filter((info) => info.id !== id);
      return filteredView;
    });
  };

  return (
    <div className={style.container}>
      <h3>Data Entry</h3>
      <Form addInfo={handleAddInfo} />
      <View view={view} onRemoveInfo={handleRemoveInfo} />
    </div>
  );
};

export default Home4;
