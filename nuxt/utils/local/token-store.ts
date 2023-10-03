import {defineStore} from "pinia"

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    username: "",
    userId: "",
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUsername(username: string) {
      this.username = username
    },
    setUserId(userId: string) {
      this.userId = userId
    },
  },
  persist: true,
})
