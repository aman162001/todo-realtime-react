import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../../../redux/Action/authAction";
import "./Register.css";

export default function Register() {
  const isLoggedIn = useSelector(
    (initialState) => initialState.auth.isLoggedIn
  );
  const dispatch = useDispatch();

  const initial = Object.freeze({
    email: "",
    password: "",
  });

  const [data, setData] = useState(initial);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(data.email, data.password)).then(() => {
      window.location.replace("/todo");
    });
  };

  const handleErrMsg = (e) => {
    switch (e.target.name) {
      case "email":
        if (validateEmail(e.target.value) !== null) {
          if (e.target.classList.contains("is-invalid")) {
            e.target.classList.remove("is-invalid");
            e.target.classList.add("is-valid");
          }
          setData({ ...data, [e.target.name]: e.target.value });
        } else {
          e.target.classList.add("is-invalid");
        }
        break;

      case "password":
        if (validatePassword(e.target.value) !== null) {
          if (e.target.classList.contains("is-invalid")) {
            e.target.classList.remove("is-invalid");
            e.target.classList.add("is-valid");
          }
          setData({ ...data, [e.target.name]: e.target.value });
        } else {
          e.target.classList.add("is-invalid");
        }
        break;
    }
  };

  if (isLoggedIn) {
    return <NavLink to="/todo" />;
  }

  return (
    <>
      {isLoggedIn ? (
        <Navigator to="/todo" />
      ) : (
        <div className="container">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="register"
          >
            <div className="title">
              <h2>Register</h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="register-wrapper needs-validation d-flex flex-column gap-3"
            >
              <div className="input-group has-validation ">
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="E-mail"
                  name="email"
                  className="form-control"
                  aria-describedby="inputGroupPrepend"
                  onChange={handleErrMsg}
                  required
                  style={{ padding: "0.575rem 1rem" }}
                />
                <div className="invalid-feedback">Invalid Email.</div>
              </div>
              <div className="input-group has-validation">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  name="password"
                  aria-describedby="inputGroupPrepend"
                  onChange={handleErrMsg}
                  required
                  style={{ padding: "0.575rem 1rem" }}
                />
                <div className="invalid-feedback">
                  The password must contain at least one capital letter, one
                  number, one special character and a minimum of 8 characters
                </div>
              </div>
              <button type="submit" className="btn btn-dark">
                Register
              </button>
            </form>
            <a className="mt-4" href="/login">
              <span>Already have an account? Sign In</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
