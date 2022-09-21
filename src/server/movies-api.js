import axios from "axios"
export class moviesApi{
  api  = axios.create({
    baseURL: "http://150.230.78.209:18000/api/v1"
  })


  async listMovies(){
    const response = await this.api.get("/movies")
    console.log(`response: ${response}, response.data: ${response.data}`)
    return response
  }
}