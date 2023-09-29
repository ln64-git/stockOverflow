<script setup lang="ts">
import {useTokenStore} from "../store/token-store"
import axios, {AxiosResponse, AxiosError} from "axios"
import {useRouter} from "vue-router"

const tokenStore = useTokenStore()
const router = useRouter()
let groupList: Group[] = []
let dataLoaded = false

const fetchData = async () => {
  if (!tokenStore.token) {
    router.push({path: "/signin"})
    return
  }
  const apiUrl = "http://localhost:9000/groups"
  const headers = {
    Authorization: `Bearer ${tokenStore.token}`,
  }
  try {
    const response: AxiosResponse = await axios.get(apiUrl, {headers})
    console.log(response)
    groupList = response.data
  } catch (error: any) {
    console.error("Error:", error.message)
  } finally {
    dataLoaded = true
  }
}
await fetchData()
</script>

<template>
  <div>
    <ul
      v-if="dataLoaded"
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
    <p v-else>Loading...</p>
  </div>
</template>
