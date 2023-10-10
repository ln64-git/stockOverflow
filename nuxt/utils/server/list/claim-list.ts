import {useTokenStore} from "../../local/token-store"
import axios, {AxiosResponse} from "axios"

const ClaimList = async (groupId: number, listId: number) => {
  const tokenStore = useTokenStore()
  const apiUrl = `http://localhost:9000/groups/${groupId}/lists/${listId}/claim`
  console.log(groupId, listId)
  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  }
  try {
    const response: AxiosResponse = await axios.put(apiUrl, null, {headers})
    return response.data
  } catch (error: any) {
    console.error("Error:", error.message)
  }
}

export default ClaimList
