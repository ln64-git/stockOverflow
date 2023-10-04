import {defineStore} from "pinia"

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    username: "",
    userId: 0,
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUsername(username: string) {
      this.username = username
    },
    setUserId(userId: number) {
      this.userId = userId
    },
  },
  persist: true,
})
