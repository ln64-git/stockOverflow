<script setup lang="ts">
import {ListFormat} from "typescript"
import getListItems from "~/utils/server/item/get-list-items"

interface list {
  claimedId: number
  dateModified: string
  description: string
  groupId: number
  listCompleted: boolean
  listId: number
  listName: string
}
const props = defineProps({
  item: Object as () => list,
})
const groupId = props.item?.groupId || 0
const listId = props.item?.listId || 0
const itemList = await getListItems(groupId, listId)
console.log(itemList[1].itemName)
</script>

<template>
  <div class="card collapse-title p-6 flex flex-row justify-between">
    <div>
      <h2 class="card-title">{{ props.item?.listName }}</h2>
      <p>{{ props.item?.description }}</p>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-large btn-info btn-outline w-[72px] z-20">
        Claim
      </button>
      <button class="btn btn-large btn-outline btn-error w-[72px] z-20">
        Delete
      </button>
    </div>
  </div>
  <div class="collapse-content">
    <div class="font-bold" v-for="(item, index) in itemList" :key="index">
      {{ item.itemName }}
    </div>
  </div>
</template>
