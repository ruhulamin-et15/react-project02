import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have atleast 2 characters")
        .required(),
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(6, "password must have atleast 6 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );

  const renderPasswordError = formik.touched.password &&
    formik.errors.password && (
      <span style={{ color: "red" }}>{formik.errors.password}</span>
    );

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="name"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          autoFocus
        />
        <br />
        {renderNameError}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />{" "}
        <br />
        {renderEmailError}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        {renderPasswordError}
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div>
      <h3>User Signup</h3>
      {renderForm}
    </div>
  );
};

export default Signup;
