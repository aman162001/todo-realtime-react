import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className=" home d-flex justify-content-center align-items-center">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mt-5 text-center d-flex flex-column align-items-center heading"
      >
        <h1>Create your daily tasks</h1>
        <h3>Keep your task organized</h3>
        <div className="">
          <button
            className="my-3 btn btn-dark"
            onClick={() => {
              window.location.replace("/todo");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
