<script setup lang="ts">
import {useRoute} from "vue-router"
import {useTokenStore} from "~/utils/local/token-store"
import getGroupByGroupId from "~/utils/server/group/get-group-by-group-id"
import getListByGroupId from "~/utils/server/list/get-list-by-group-id"

const auth = useTokenStore().token != ""
const route = useRoute()
const groupId = Number(route.params.group_id)
let group: Group | null = null
let list: List[] | null = null

if (auth) {
  group = await getGroupByGroupId(groupId)
  list = await getListByGroupId(groupId)
}

</script>

<template>
  <div class="h-full bg-base-200 overflow-auto">
    <div class="flex-col max-w-[800px] m-auto">
      <div class="flex flex-col text-center">
        <div class="text-3xl">{{ group?.groupName }}</div>
        <div class="text-2xl">{{ group?.groupId }}</div>
      </div>
      <div class="card w-full">
        <div class="card-body w-full">
          <ul class="w-full">
            <div
              v-for="(item, index) in list"
              :key="index"
              class="card bg-base-100 w-full text-primary-content my-4"
            >
              <div class="card-body flex flex-row justify-between">
                <div>
                  <h2 class="card-title">{{ item.listName }}</h2>
                  <p>{{ item.description }}</p>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-large w-[72px]">View</button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
