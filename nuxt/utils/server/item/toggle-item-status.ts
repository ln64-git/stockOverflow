import { useTimeAgo } from '@vueuse/core';
import axios, { AxiosResponse } from 'axios';
import { useTokenStore } from '~/utils/local/token-store';

const toggleItemStatus = async (
  userItem: Item | undefined,
  groupId: number,
  listId: number,
  itemId: number,
) => {
  const tokenStore = useTokenStore();
  const apiUrl = `/groups/${groupId}/lists/${listId}/items/${itemId}`;

  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  };
  try {
    axios.put(apiUrl, toggleStatus(userItem), { headers });
  } catch (error: any) {
    console.error('Error:', error.message);
    throw error;
  }
};

export default toggleItemStatus;

const toggleStatus = (userItem: Item | undefined) => {
  const some = {
    ...userItem,
    status: !userItem?.status,
  };
  console.log(some);
  return some;
};
