import axios from "axios";
import store from '@/store'
export default class CommentsApi {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async listAll() {
    const response = await this.api.get("/comments");
    return response.data;
  }
  async listCommentsEmail(email = "") {
    const response = await this.api.get("/comments/search/", {
      params: { email }
    });
    console.log(response.data)
    return response.data;
  }
}
