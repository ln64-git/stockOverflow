<script setup lang="ts">
import getListItems from "~/utils/server/item/get-list-items"
import ClaimList from "~/utils/server/list/claim-list"
import getUserById from "~/utils/server/user/get-user-by-id"

const props = defineProps({
  item: Object as () => List,
})
const groupId = props.item?.groupId || 0
const listId = props.item?.listId || 0
const itemList = await getListItems(groupId, listId)
let isClaimed = props.item?.claimedId
const claimedId = props.item?.claimedId || 0
let claimedBy = await getUserById(claimedId)
let areYouSure = ref(false)
const handleClick = () => {
  areYouSure.value = !areYouSure.value
}
const handleClaim = async (userId: number) => {
  const res = await ClaimList(groupId, userId)
  console.log(res)
}
</script>

<template>
  <div class="card collapse-title p-6 flex flex-row justify-between">
    <div>
      <h2 class="card-title">{{ props.item?.listName }}</h2>
      <p>{{ props.item?.description }}</p>
    </div>
    <div class="card-actions justify-end">
      <div v-if="isClaimed" class="btn btn-ghost">Claimed by {{ claimedBy }}</div>
      <button v-else class="btn z-20">open</button>
    </div>
  </div>
  <div class="collapse-content">
    <div v-if="areYouSure" class="text-center text-3xl font-light pb-2 pt-6">
      Are you sure
      <div class="justify-center flex w-1/2 m-auto gap-8 pt-10">
        <button
          @click="handleClick"
          class="btn btn-outline btn-neutral-100 w-[100px] z-20"
        >
          Return
        </button>
        <button class="btn btn-success btn-outline w-[100px] z-20">
          Submit
        </button>
      </div>
    </div>
    <div
      v-else
      v-for="(item, index) in itemList"
      :key="index"
      class="font-bold"
    >
      <Item :item="item" />
    </div>
    <div v-if="!areYouSure" class="justify-around flex w-1/2 m-auto gap-4 pt-4">
      <button
        @click="handleClick"
        class="btn btn-outline btn-error w-[100px] z-20"
      >
        Delete
      </button>
      <button
        @click="handleClick"
        class="btn btn-outline btn-warning w-[100px] z-20"
      >
        Edit
      </button>
      <button
        @click="handleClick"
        class="btn btn-outline btn-secondary w-[100px] z-20"
      >
        Complete
      </button>
      <button
        @click="handleClaim(listId)"
        class="btn btn-info btn-outline w-[100px] z-20"
      >
        Claim
      </button>
    </div>
  </div>
</template>
