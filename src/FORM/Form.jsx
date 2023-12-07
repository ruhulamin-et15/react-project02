import React, { useState } from "react";

const Form = (props) => {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const { name, email, phone } = info;

  // // without props
  // const handleChange = (e) => {
  //   const fieldName = e.target.name;
  //   setInfo({ ...info, [fieldName]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setInfo({ name: "", email: "", phone: "" });
  //   console.log(info);
  // };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setInfo((oldInfo) => {
      return { ...oldInfo, [fieldName]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({ name: "", email: "", phone: "" });
    props.addInfo(info);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
            autoFocus
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
