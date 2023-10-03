<script setup>
import getGroupList from "~/utils/server/get-group-list"
import getGroupUserCount from "~/utils/server/get-group-user-count"

const {groupId} = defineProps(["groupId"])
let group = null
let userCount = 0
if (groupId) {
  const groupList = await getGroupList()
  group = groupList.find((item) => item.groupId === groupId)
  const userCountPrototype = await getGroupUserCount(groupId)
  userCount = userCountPrototype.length
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
        <button class="btn btn-primary w-1/3">Join</button>
      </div>
    </div>
  </div>
</template>
