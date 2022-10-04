import axios from "axios";
import store from "../store";

export default class LoginService {
  api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });
  async login(data) {
    console.log(data);
    return this.api.post("/login", data);
  }
}
