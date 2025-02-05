import AuthService from "../../utils/authService";

export const register = (email, password) => (dispatch) => {
  return AuthService.register(email, password).then(
    (resp) => {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: resp,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: "REGISTER_FAIL",
      });
      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (resp) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: resp,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: "LOGIN_FAIL",
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: "LOGOUT",
  });
};
