const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, ...user }
  : { isLoggedIn: false, user: null };

export const authReducer = (currentstate = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER_SUCCESS":
      return {
        ...currentstate,
        isLoggedIn: true,
        ...payload,
      };
    case "REGISTER_FAIL":
      return {
        ...currentstate,
        isLoggedIn: false,
        user: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...currentstate,
        isLoggedIn: true,
        ...payload,
      };
    case "LOGIN_FAIL":
      return {
        ...currentstate,
        isLoggedIn: false,
        user: null,
      };
    case "LOGOUT":
      return {
        ...currentstate,
        isLoggedIn: false,
        user: null,
      };

    default:
      return currentstate;
  }
};
