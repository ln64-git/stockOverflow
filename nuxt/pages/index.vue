<script setup lang="ts">
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
      <div class="card w-96 bg-base-100 shadow-xl flex-grow">
        <div class="card-body">
          <h2 class="card-title">{{ group.groupName }}</h2>
          <p>{{ group.groupDescription }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
