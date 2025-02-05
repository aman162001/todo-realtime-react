import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, todoCompleted } from "../../redux/Action/todoAction";
import "./Task.css";

export default function Task(props) {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(deleteItem(props.socket, e.target.id));
  };

  const handleOnChange = (e) => {
    dispatch(todoCompleted(props.socket, e.target.id, e.target.checked));
  };

  return (
    <div className="p-3 mb-2 task d-flex gap-3 align-items-center">
      <div className="check">
        <input
          type="checkbox"
          name=""
          id={props.id}
          checked={props.is_done}
          onChange={handleOnChange}
        />
      </div>
      <div className={`task-value flex-grow-1 ${props.is_done && "strike"}`}>
        {props.task}
      </div>

      <div className="list-icon" onClick={handleOnClick} id={props.id}>
        <img
          id={props.id}
          src="https://antoniopataro.github.io/todo-app/assets/trashIcon.63e204af.svg"
          alt=""
        />
      </div>
    </div>
  );
}
