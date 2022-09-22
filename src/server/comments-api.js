import axios from "axios"
export default class CommentsApi{
api = axios.create({
    // baseURL: "http://150.230.78.209:18000/api/v1".
    baseURL: "http://localhost:3333/"
  })

  async listAll(){
    const response = await this.api.get('/comments')
    return response.data
  }
  async listCommentsEmail(email = ""){
    const response = await this.api.get('/comments/search/', 
      { params: { email } 
    })
    return response
  }

 
}