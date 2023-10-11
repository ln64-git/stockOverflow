<script setup lang="ts">
import Overlay from "~/components/Overlay.vue"
import { useOverlayStore } from "~/utils/local/overlay-store"
import { useTokenStore } from "~/utils/local/token-store"
import { ref, computed } from "vue" 
import getGroupList from "~/utils/server/group/get-group-list"

let groupList: Group[] = await getGroupList()
const tokenStore = useTokenStore()
const router = useRouter()
if (!tokenStore.token) {
  router.push({ path: "/signin" })
}

const overlayValue = ref(false)

const overlayStore = useOverlayStore()
const overlayComputed = computed(() => overlayStore.value)
overlayValue.value = overlayComputed.value

console.log(overlayValue.value)
</script>

<template>
  <div class="flex flex-wrap justify-center bg-base-200 gap-8 p-8 z-10">
    <ul v-for="(group, index) in groupList" :key="index">
      <Card :groupId="group.groupId" :overlay="overlayValue" />
    </ul>
    <div v-if="overlayValue">
      <Overlay />
    </div>
  </div>
</template>
