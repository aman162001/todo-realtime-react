import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Action/authAction";
import "./Navbar.css";
export default function Navbar() {
  const isLoggedIn = useSelector(
    (initialState) => initialState.auth.isLoggedIn
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <div className="navbar d-flex gap-2 align-items-center">
        <a href="/" className="flex-grow-1">
          <h3>todo</h3>
        </a>
        {isLoggedIn ? (
          <a className="mx-2" onClick={handleLogout}>
            <h6>Logout</h6>
          </a>
        ) : (
          <>
            {" "}
            <a href="/register" className="mx-2">
              <h6>Sign Up</h6>
            </a>
            <a href="/login" className="mx-2">
              <h6>Login</h6>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
