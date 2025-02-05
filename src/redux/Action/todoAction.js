export const initialData = (res) => ({
  type: "INITIAL_DATA",
  items: res,
});

export const AddItem = (data) => ({
  type: "ADD_ITEM",
  items: data.item,
  is_done: data.is_done,
});

export const DeleteItem = (data) => ({
  type: "DELETE_ITEM",
  id: data.id,
});

export const MarkedTodo = (data) => ({
  type: "TODO_COMPLETE",
  id: data.id,
  is_done: data.is_done,
});

// socket action

export const addItem = (socket, item) => {
  return (dispatch) => {
    let todoData = {
      task: item,
      is_done: false,
    };
    socket.emit("addItem", todoData);
  };
};

export const deleteItem = (socket, id) => {
  return (dispatch) => {
    socket.emit("deleteItem", id);
  };
};

export const todoCompleted = (socket, id, flag) => {
  return (dispatch) => {
    let todoData = {
      id: id,
      is_done: flag,
    };
    socket.emit("completedItem", todoData);
  };
};

export const loadInitalData = (socket) => {
  return (dispatch) => {
    socket.on("initialData", (resp) => {
      dispatch(initialData(resp));
    });
  };
};
