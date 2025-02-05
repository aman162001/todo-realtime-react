import axios from "axios";

const API_URL =
  import.meta.env.VITE_PRODUCTION === "false"
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRODUCTION_URL;

class AuthService {
  login(email, password) {
    return axios
      .post(`${API_URL}/login`, { email: email, password: password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  register(email, password) {
    return axios
      .post(`${API_URL}/register`, { email: email, password: password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getAuthHeader() {
    const user = JSON.parse(localStorage.getItem("users"));

    if (user && user.token) {
      return { Authorization: `Bearer ${user.token}` };
    } else return {};
  }
}

export default new AuthService();
