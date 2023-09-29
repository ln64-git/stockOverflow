<script setup lang="ts">
import {useTokenStore} from "~/store/token-store"
import getGroupList from "~/utils/server/get-group-list"

let groupList: Group[] = await getGroupList()
const tokenStore = useTokenStore()
const router = useRouter()
if (!tokenStore.token) {
  router.push({path: "/signin"})
}
</script>

<template>
  <div>
    <ul
      class="card w-96 bg-base-100 shadow-xl"
      v-for="(group, index) in groupList"
      :key="index"
    >
      <div class="card-body">
        <h2 class="card-title">{{ group.groupName }}</h2>
        <p>{{ group.groupDescription }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Join</button>
        </div>
      </div>
    </ul>
  </div>
</template>
~/utils/store/token-store
