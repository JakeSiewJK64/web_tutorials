import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "must be within 15 characters long!")
        .required("last name required!"),
      email: Yup.string().email("invalid email").required("email is required!"),
    }),
    onSubmit: (x) => {
      console.log("submitted!");
      console.log(x);
    },
  });

  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="ml-auto mr-auto w-50">
        <input
          className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
        <input
          className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-success m-3">
        Submit
      </button>
    </form>
  );
}
