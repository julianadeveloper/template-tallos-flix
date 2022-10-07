import axios from "axios";
import store from '@/store'
export default class CommentsApi {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async listAll(limit, page) {
    const response = await this.api.get("/comments", {params: limit, page});
    return response.data;
  }
  async listCommentsEmail(params) {
    const response = await this.api.get("/comments/search", {
      params
    });
    console.log(params);

    return response.data;
  }
}
