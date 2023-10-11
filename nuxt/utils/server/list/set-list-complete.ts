import axios, { AxiosResponse } from 'axios';
import { useTokenStore } from '~/utils/local/token-store';

const setItemComplete = async (groupId: number, listId: number) => {
  const tokenStore = useTokenStore();
  const apiUrl = `/groups/${groupId}/lists/${listId}/items/isComplete`;

  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  };

  try {
    const response: AxiosResponse = await axios.put(apiUrl, null, { headers });
    return response.data;
  } catch (error: any) {
    console.error('Error:', error.message);
    throw error;
  }
};

export default setItemComplete;
