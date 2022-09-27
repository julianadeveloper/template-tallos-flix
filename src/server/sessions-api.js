import store from "@/store";
import axios from "axios";

export default class SessionsApi {
  api = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1/",
    headers: {
      Authorization: `Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async getSessions(){
    const response = await this.api.get('/sessions')
    console.log('this sessions is a:', typeof response.data , response.data)
    return response.data
  }


}
