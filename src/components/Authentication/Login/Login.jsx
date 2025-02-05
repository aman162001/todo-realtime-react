import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../redux/Action/authAction";
import "./Login.css";

export default function Login() {
  const isLoggedIn = useSelector(
    (initialState) => initialState.auth.isLoggedIn
  );

  const dispatch = useDispatch();
  const initial = Object.freeze({
    email: "",
    password: "",
  });

  const [credential, setCredential] = useState(initial);

  const handleOnChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(credential.email, credential.password)).then(() => {
      window.location.replace("/todo");
    });
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/todo" />
      ) : (
        <div className="container">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="login"
          >
            <div className="title">
              <h2>Login</h2>
            </div>
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="login-wrapper needs-validation d-flex flex-column gap-3"
            >
              <div className="input-group has-validation ">
                <input
                  placeholder="E-mail"
                  autoComplete="off"
                  type="text"
                  name="email"
                  className="form-control"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={handleOnChange}
                  style={{ padding: "0.575rem 1rem" }}
                />
              </div>
              <div className="input-group has-validation">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={handleOnChange}
                  style={{ padding: "0.575rem 1rem" }}
                />
              </div>
              <button id="btn-login" type="submit" className="btn btn-dark">
                Login
              </button>
            </form>
            <a className="mt-4" href="/register">
              <span>New here? Create your account</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
