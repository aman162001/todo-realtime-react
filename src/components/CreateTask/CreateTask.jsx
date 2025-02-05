import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Action/todoAction";
import "./CreateTask.css";

export default function CreateTask(props) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [task, setTask] = useState("");
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="p-3 create-task d-flex">
      <input
        placeholder="Write a new task"
        className=""
        type="text"
        name="task"
        ref={inputRef}
        onChange={handleOnChange}
      />
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch(addItem(props.socket, task));
          setTask("");
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
