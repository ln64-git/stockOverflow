import {useTokenStore} from "../../../utils/local/token-store"
import axios, {AxiosResponse} from "axios"

const getListByGroupId= async (groupId: number) => {
  const tokenStore = useTokenStore()
  const apiUrl = `http://localhost:9000/groups/${groupId}/lists`

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

export default getListByGroupId
