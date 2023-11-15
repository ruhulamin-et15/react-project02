import React, { useState } from "react";
//  import { useFormik } from 'formik';
import style from "./form.module.css";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [info, setInfo] = useState({ name: "", phone: "", mail: "" });

  const { name, phone, mail } = info;

  const handleChange = (event) => {
    const name = event.target.name;
    setInfo((oldInfo) => {
      return { ...oldInfo, [name]: event.target.value };
    });
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/info");

    setInfo({ name: "", phone: "", mail: "" });
    props.onAddInfo(info);
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <p style={{ marginLeft: "8px", fontSize: "20px" }}>
          Registration Form:-
        </p>
        <div className={style["form-field"]}>
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

        <div className={style["form-field"]}>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className={style["form-field"]}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={mail}
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
