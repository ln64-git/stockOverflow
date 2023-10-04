<script setup lang="ts">
import {useRoute} from "vue-router"
import {useTokenStore} from "~/utils/local/token-store"
import getGroupByGroupId from "~/utils/server/get-group-by-group-id"

const auth = useTokenStore().token != ""
const route = useRoute()
const groupId = Number(route.params.group_id)
let group: Group | null = null

if (auth) {
  group = await getGroupByGroupId(groupId)
}
</script>

<template>
  <div class="hero h-full bg-base-200">
    <div class="hero-content flex-col">
      <div class="flex flex-col text-center ">
        <div class="text-3xl">{{ group?.groupName }}</div>
        <div class="text-2xl">{{ group?.groupId }}</div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>
