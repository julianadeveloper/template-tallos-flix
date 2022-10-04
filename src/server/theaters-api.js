import store from "@/store";
import axios from "axios";

export default class theathersApi {
  api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async getTheaters(limit, page){
    const response = await this.api.get('/theaters',  { params: limit, page })
    return response.data
  }

  async theaterDistance(distance) {
    return this.api.post("/Theaters/distance", distance);
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
