import axios from "axios";
import ExpirySession from "../utils/expirysession";
import Navigation from "./navigation.service";

class AuthService {
  async doLogin(data) {
    return new Promise((resolve, reject) => {
      axios
        .post('user/login', data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async Register(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/admin/auth/register", data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new AuthService();

export function Logout(from = "/") {
  ExpirySession.clear();
  const location = {
    pathname: "/",
    state: { from },
  };
  Navigation.push(location);
  window.location.reload();
}
