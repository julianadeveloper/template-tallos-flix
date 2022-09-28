import store from "@/store";
import axios from "axios";

export default class theathersApi {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async getTheaters(){
    const response = await this.api.get('/sessions')
    return response.data
  }


}
