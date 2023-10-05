import axios, {AxiosError, AxiosResponse} from "axios"
import {useTokenStore} from "~/utils/local/token-store"

interface ApiResponse {
  token: string
  user: {
    id: number
    username: string
    authorities: {name: string}[]
  }
}


const Login = (username: string, password: string) => {
  const tokenStore = useTokenStore()
  const apiUrl = "http://localhost:9000/login"
  axios
    .post(apiUrl, {
      username,
      password,
    })
    .then((response: AxiosResponse<ApiResponse>) => {
      const token = response.data.token
      const user = response.data.user 
      const userId = user.id 
      console.log(userId)
      tokenStore.setToken(token)
      tokenStore.setUsername(username)
      tokenStore.setUserId(userId)
      console.log(response.data)
      console.log("Login Success")
      console.log("Signed in as", tokenStore.username)
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        console.error("Server error:", error.response.data)
      } else {
        console.error("Network error:", error.message)
      }
    })
}

export default Login
