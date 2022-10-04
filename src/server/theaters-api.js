import store from "@/store";
import axios from "axios";

export default class theathersApi {
  api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async getTheaters(){
    const response = await this.api.get('/theaters')
    return response.data
  }
  async TheaterCreate(data) {
    return this.api.post("/Theaters", data);
  }

  async TheaterUpdate(id, data) {
    const result = await this.api.put(`/theaters/${id}`, data);
    return result;
  }

  async deleteTheater(_id) {
    console.log("delete theater id", _id);
    return this.api.delete("/theaters", { params: { _id } });
  }


}
