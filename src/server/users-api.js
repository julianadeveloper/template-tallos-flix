import axios from "axios";
export default class UsersApi {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/"
    // baseURL: "http://localhost:3333/"
  });

  async listAll() {
    const response = await this.api.get("/comments");
    return response.data;
  }
  async listUserEmail(email = "") {
    const response = await this.api.get("/users/search/", {
      params: { email }
    });
    return response.data;
  }

  async userCreate(data) {
    return this.api.post("/users", data);
  }

  async userUpdate(id, data) {
    const result = await this.api.put(`/users/${id}`, data);
    return result;
  }

  async deleteUser(_id) {
    console.log("delete user id", _id);
    return this.api.delete("/users/delete", { params: { _id } });
  }
}
