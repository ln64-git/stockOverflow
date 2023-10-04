<script setup lang="ts">
import {useRoute} from "vue-router"

const route = useRoute()
const groupId = route.params.group_id
</script>

<template>
  <div class="flex justify-center align-middle h-full bg-base-200">
    <h1>Group page</h1>
    <p>Slug: {{ groupId }}</p>
  </div>
</template>
