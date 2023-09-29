import {defineStore} from "pinia"

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    username: "",
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUsername(username: string) {
      this.username = username
    },
  },
  persist: true,
})
