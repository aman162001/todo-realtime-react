import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteItem,
  loadInitalData,
  MarkedTodo,
} from "../../redux/Action/todoAction";
import CreateTask from "../CreateTask/CreateTask";
import Task from "../Task/Task";
import "./TaskList.css";

import { io } from "socket.io-client";
const socket = io(
  import.meta.env.VITE_PRODUCTION === "false"
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRODUCTION_URL,
  {
    transports: ["websocket"],
    auth: {
      token: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : null,
    },
  }
);

export default function TaskList() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.todo);

  socket.on("itemAdded", (res) => {
    dispatch(AddItem(res));
  });

  socket.on("itemDeleted", (res) => {
    dispatch(DeleteItem(res));
  });

  socket.on("todoComplete", (res) => {
    dispatch(MarkedTodo(res));
  });

  useEffect(() => {
    dispatch(loadInitalData(socket));
  }, []);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className=" d-flex flex-column align-items-center justify-content-around"
    >
      <CreateTask socket={socket} />
      <div className="tasklist ">
        {data.items.length === 0 && <h2 className="text-center">No task</h2>}

        {data.isFetch ? (
          <h4>Loading...</h4>
        ) : (
          data.items.map((item, index) => (
            <Task
              id={item._id}
              key={index}
              task={item.task}
              is_done={item.is_done}
              socket={socket}
            />
          ))
        )}
      </div>
    </div>
  );
}
