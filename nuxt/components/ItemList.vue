<script setup lang="ts">
import getListItems from "~/utils/server/item/get-list-items"

const props = defineProps({
  item: Object as () => List,
})
const groupId = props.item?.groupId || 0
const listId = props.item?.listId || 0
const itemList = await getListItems(groupId, listId)
let claimed = props.item?.claimedId
</script>

<template>
  <div class="card collapse-title p-6 flex flex-row justify-between">
    <div>
      <h2 class="card-title">{{ props.item?.listName }}</h2>
      <p>{{ props.item?.description }}</p>
    </div>
    <div class="card-actions justify-end">
      <button v-if="claimed" class="btn"></button>
      <button v-else class="btn ">open</button>
    </div>
  </div>
  <div class="collapse-content">
    <div class="font-bold" v-for="(item, index) in itemList" :key="index">
      <Item :item="item" />
    </div>
    <div class="justify-around flex w-1/2 m-auto gap-4">
      <button class="btn btn-outline btn-error w-[100px] z-20">
        Delete
      </button>
      <button class="btn btn-outline btn-warning w-[100px] z-20">
        Edit
      </button>
      <button class="btn btn-outline btn-secondary w-[100px] z-20">
        Complete
      </button>
      <button class="btn btn-info btn-outline w-[100px] z-20">
        Claim
      </button>
    </div>
  </div>
</template>
