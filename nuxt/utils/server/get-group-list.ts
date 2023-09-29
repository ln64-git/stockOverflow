import {useTokenStore} from "../../store/token-store"
import axios, {AxiosResponse} from "axios"

const getGroupList = async () => {
  const tokenStore = useTokenStore()
  const apiUrl = "http://localhost:9000/groups"
  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  }
  try {
    const response: AxiosResponse = await axios.get(apiUrl, {headers})
    return response.data
  } catch (error: any) {
    console.error("Error:", error.message)
  }
}

export default getGroupList
