import axios from "axios";
import store from "../store";
export default class MoviesApi {
  api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async listAll(limit, page) {
    const response = await this.api.get("/movies", { params: limit, page });
    console.log(response.data);
    return response.data;
  }

  async listMovies(params) {
    const response = await this.api.get("/movies/search", {
      params
    });

    return response.data;
  }
  async MovieCreate(data) {
    return this.api.post("/movies", data);
  }

  async MovieUpdate(id, data) {
    const result = await this.api.put(`/movies/${id}`, data);
    return result;
  }

  async deleteMovie(_id) {
    return this.api.delete(`/movies/${_id}`, {params: _id});
  }
}
