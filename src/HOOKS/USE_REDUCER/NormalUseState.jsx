import React, { useState } from "react";

const CitiesName = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Rangpur" },
  { id: 3, name: "Dinajpur" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const NormalUseState = () => {
  const [cities, setCities] = useState(CitiesName);
  const [cityName, setCityName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName("");
    setCities((prevState) => {
      const newCity = { id: new Date().getTime().toString(), name: cityName };
      return [...prevState, newCity];
    });
    setIsModalOpen(true);
    setModalText(`${cityName} is added`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City Name"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          required
        />
        <button type="submit">Add City</button>
      </form>
      {isModalOpen && <Modal modalText={modalText} />}
      <ol>
        {cities.map((city) => {
          const { id, name } = city;
          return <li key={id}>{name}</li>;
        })}
      </ol>
    </div>
  );
};

export default NormalUseState;
