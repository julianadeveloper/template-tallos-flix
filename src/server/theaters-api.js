import store from "@/store";
import axios from "axios";

export default class theathersApi {
  api = axios.create({
    // "http://150.230.78.209:18000/api/v1/",
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  
  async getTheateriD(params){

    const response = await this.api.get('/theaters',  { params})
    return response.data
  }



  async getTheaters(params){

    const response = await this.api.get('/theaters/search',  { params})
    return response.data
  }

  async theaterDistance(data) {
    return await this.api.post("/Theaters/distance", data)
  }


  async TheaterCreate(data) {
    return this.api.post("/Theaters", data);
  }

  async TheaterUpdate(id, data) {
    const result = await this.api.put(`/theaters/${id}`, data);
    return result;
  }

  async deleteTheater(_id) {
    return this.api.delete("/theaters/id", { params: { _id } });
  }


}
