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
    reset() {
      this.token = ""
      this.username = ""
      this.userId = 0
    },
  },
  persist: true,
})
