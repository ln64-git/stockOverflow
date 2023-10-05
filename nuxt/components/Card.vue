<script setup lang="ts">
import { useTokenStore } from '~/utils/local/token-store';
import addUserToGroup from '~/utils/server/group/add-user-to-group';
import getGroupList from '~/utils/server/group/get-group-list';
import getGroupMembers from '~/utils/server/group/get-group-members';
import getGroupUserCount from '~/utils/server/group/get-group-user-count';

const {groupId} = defineProps(["groupId"])
let group: Group | null = null
let userCount = 0
let joined = false
let overlay = ref(false)

if (groupId) {
  const groupList = await getGroupList()
  group = groupList.find((item: Group) => item.groupId === groupId)

  const userCountPrototype = await getGroupUserCount(groupId)
  userCount = userCountPrototype.length

  const tokenStore = useTokenStore()
  const userId = tokenStore.userId

  const groupMembers = await getGroupMembers(groupId)

  for (const member of groupMembers) {
    if (member.memberId === userId) {
      joined = true
    }
  }
}

const passwordRef = ref("")
const errorRef = ref("")
const router = useRouter()
const handleViewClick = () => {
  router.push(`/${groupId} `)
}
const handleJoinClick = () => {
  overlay.value = true
}
const handleSubmitClick = async () => {
  const password = passwordRef.value
  const errorMessage = password ? await addUserToGroup(groupId, password) : ""
  errorRef.value = errorMessage || ""
  passwordRef.value = ""
  overlay.value = false
}
</script>

<template>
  <div v-if="overlay" class="card w-96 bg-base-100 shadow-xl flex-grow">
    <div class="card-body">
      <h2 class="card-title">{{ group?.groupName }}</h2>
      <span class="flex justify-between w-full pr-4">
        <p>user count:</p>
        <p class="text-right pb-2">{{ userCount }}</p>
      </span>
      <div class="card-actions justify-between">
        <div class="flex justify-between align-middle">
          <input
            v-model="passwordRef"
            placeholder="password"
            class="input file-input-bordered w-[200px]"
          />
        </div>
        <button class="btn btn-accent w-1/3" @click="handleSubmitClick">
          Submit
        </button>
      </div>
    </div>
  </div>

  <div v-else class="card w-96 bg-base-100 shadow-xl flex-grow">
    <div class="card-body">
      <h2 class="card-title">{{ group?.groupName }}</h2>
      <span class="flex justify-between w-full pr-4">
        <p>user count:</p>
        <p class="text-right pb-2">{{ userCount }}</p>
      </span>
      <div class="card-actions justify-between">
        <div class="flex justify-between align-middle">
          <div v-if="errorRef != ''">
            {{ errorRef }}
          </div>
        </div>
        <button
          v-if="joined"
          class="btn btn-primary w-1/3"
          @click="handleViewClick"
        >
          View
        </button>
        <button v-else class="btn btn-accent w-1/3" @click="handleJoinClick">
          Join
        </button>
      </div>
    </div>
  </div>
</template>
~/utils/server/group/add-user-to-group
