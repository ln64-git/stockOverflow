<script setup lang="ts">
import getGroupList from "~/utils/server/get-group-list"
import getGroupUserCount from "~/utils/server/get-group-user-count"
import { useTokenStore } from "~/utils/local/token-store"
import getGroupMembers from "~/utils/server/get-group-members"
import { ref } from "vue"
import { useOverlayStore } from "~/utils/local/overlay-store"

const { groupId } = defineProps(["groupId"])
let group = null
let userCount = 0
let joined = false

if (groupId) {
  const groupList = await getGroupList()
  group = groupList.find((item) => item.groupId === groupId)
  const userCountPrototype = await getGroupUserCount(groupId)
  userCount = userCountPrototype.length
  const tokenStore = useTokenStore()
  const userId = tokenStore.userId

  const groupMembers = await getGroupMembers(groupId)
  for (const member of groupMembers) {
    if (member.userId === userId) {
      joined = true
    }
  }
}

const overlayStore = useOverlayStore() // Initialize the store

const handleViewClick = () => {}
const handleJoinClick = () => {
  overlayStore.toggle(!overlayStore.value) 
  console.log(overlayStore.value)
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl flex-grow">
    <div class="card-body">
      <h2 class="card-title">{{ group.groupName }}</h2>
      <span class="flex justify-between w-full pr-4">
        <p>user count:</p>
        <p class="text-right pb-2">{{ userCount }}</p>
      </span>
      <div class="card-actions justify-end">
        <button
          v-if="joined"
          class="btn btn-primary w-1/3"
          @click="handleViewClick"
        >
          View
        </button>
        <button v-else class="btn btn-accent w-1/3" @click="handleJoinClick">
          Join
        </button>
      </div>
    </div>
  </div>
</template>
