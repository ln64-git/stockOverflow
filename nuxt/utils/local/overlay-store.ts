import {defineStore} from "pinia"

export const useOverlayStore = defineStore("overlay", {
  state: () => ({
    value: false,
  }),
  actions: {
    toggle(state: boolean) {
      this.value = !this.value
    },
  },
  getters: {
    getOverlayValue(): boolean {
      return this.value
    },
  },
  persist: false,
})
