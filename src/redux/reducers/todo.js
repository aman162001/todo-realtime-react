const initial = { ìsFetch: true, items: [] };

const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        ìsFetch: false,
        items: state.items.push({ task: action.item, is_done: action.is_done }),
      };
    case "INITIAL_DATA":
      return {
        ...state,
        items: action.items,
      };
    case "TODO_COMPLETE":
      const idx = state.items.findIndex((element) => element._id === action.id);

      state.items[idx].is_done = action.is_done;
      return {
        ...state,
        items: state.items,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((element) => element._id !== action.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
