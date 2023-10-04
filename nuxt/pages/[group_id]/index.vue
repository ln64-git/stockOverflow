<template>
  <h1>Group page</h1>
  <p>Slug: {{ $route.params.group_id }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const groupId = route.params.groupId
</script>

