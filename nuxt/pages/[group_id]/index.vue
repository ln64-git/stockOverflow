<script setup lang="ts">
import {useRoute} from "vue-router"
import {useTokenStore} from "~/utils/local/token-store"
import getGroupByGroupId from "~/utils/server/group/get-group-by-group-id"
import getListItems from "~/utils/server/item/get-list-items"
import getListByGroupId from "~/utils/server/list/get-list-by-group-id"
import List from "~/components/ItemList.vue"
const auth = useTokenStore().token != ""
const route = useRoute()
const router = useRouter()
const groupId = Number(route.params.group_id)
let group: Group | null = null
let list: List[] | null = null

if (auth) {
  group = await getGroupByGroupId(groupId)
  list = await getListByGroupId(groupId)
}

const handleView = async (listId: number) => {
  const items = await getListItems(groupId, listId)
}
const handleDelete = (listId: number) => {}
</script>

<template>
  <div class="h-full bg-base-200 overflow-auto">
    <div class="flex-col max-w-[800px] m-auto">
      <div class="flex flex-col text-center">
        <div class="text-3xl">{{ group?.groupName }}</div>
        <div class="text-2xl">{{ group?.groupId }}</div>
      </div>
      <div class="card-body w-full">
        <ul class="w-full">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="collapse bg-base-100 w-full text-primary-content my-4"
          >
            <input type="checkbox" />
            <List :item="item" />
          </div>
          <div class="card bg-base-100 w-full text-primary-content my-4">
            <div class="p-6 flex flex-row justify-between">
              <div>
                <h2 class="card-title font-light">New Card</h2>
              </div>
              <div class="card-actions justify-end pr-[16px]">
                <button class="btn btn-neutral w-[120px]">+</button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
