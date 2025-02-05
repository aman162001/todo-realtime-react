import React from "react";
import TaskList from "../TaskList/TaskList";
import "./Todo.css";

export default function Todo() {
  return (
    <div className="todo container ">
      <TaskList />
    </div>
  );
}
