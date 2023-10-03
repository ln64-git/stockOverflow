<script setup lang="ts">
import Card from "~/components/Card.vue"
import {useTokenStore} from "~/utils/local/token-store"
import getGroupList from "~/utils/server/get-group-list"

let groupList: Group[] = await getGroupList()
const tokenStore = useTokenStore()
const router = useRouter()
if (!tokenStore.token) {
  router.push({path: "/signin"})
}
</script>

<template>
  <div class="flex flex-wrap justify-center bg-base-200 gap-8 p-8">
    <ul v-for="(group, index) in groupList" :key="index">
      <Card :groupId="group.groupId" />
    </ul>
  </div>
</template>
