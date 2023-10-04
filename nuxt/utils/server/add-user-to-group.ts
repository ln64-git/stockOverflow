import { useTokenStore } from "../../utils/local/token-store";
import axios from "axios";

const addUserToGroup = async (groupId: number, password: string) => {
  const tokenStore = useTokenStore();
  const apiUrl = `http://localhost:9000/groups/${groupId}/members`;
  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  };
  const queryParams = {
    groupId: groupId,
    groupCode: password,
  };

  try {
    await axios.post(apiUrl, null, {
      headers: headers,
      params: queryParams,
    });
  } catch (error: any) {
    return error.response?.data.message
  }
};

export default addUserToGroup;

