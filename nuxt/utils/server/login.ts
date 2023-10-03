import axios, {AxiosError, AxiosResponse} from "axios"
import {useTokenStore} from "~/utils/local/token-store"

interface ApiResponse {
  token: string
  id: string
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
      const userId = response.data.id
      tokenStore.setToken(token)
      tokenStore.setUsername(username)
      tokenStore.setUserId(userId)
      console.log(response.data)
      console.log("Login Success")
      console.log("Signed in as", tokenStore.username)
      // console.log("token: ", tokenStore.token)
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
