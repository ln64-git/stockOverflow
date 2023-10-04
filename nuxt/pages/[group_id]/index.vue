<script setup lang="ts">
import {useRoute} from "vue-router"
import { useTokenStore } from "~/utils/local/token-store"
import getGroupByGroupId from "~/utils/server/get-group-by-group-id";

const auth = useTokenStore().token != ''
const route = useRoute()
const groupId = Number(route.params.group_id)
let group: Group | null = null;

if (auth) {
  group = await getGroupByGroupId(groupId); 
}


</script>

<template>
  <div class="flex justify-center align-middle h-full bg-base-200">
    <h1>{{group?.groupName}}</h1>
    <p>Slug: {{ groupId }}</p>
  </div>
</template>
