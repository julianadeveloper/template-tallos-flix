import axios from "axios";
export default class LoginService {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/"
    // baseURL: "http://localhost:3333/"
  });
  async login(data) {
    console.log(data)
    return this.api.post("/login", data);
  }
}
