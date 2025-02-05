import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const auth = useSelector((initialState) => initialState.auth.isLoggedIn);
  return auth ? children : <Navigate to="/login" />;
}

console.log(import.meta.env.VITE_PRODUCTION);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: "mobile",
    });
    AOS.refresh;
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
