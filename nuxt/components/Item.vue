<script setup lang="ts">
const props = defineProps({
  item: Object as () => Item,
})

const checked = props.item?.status || false
</script>

<template>
  <div class=" py-1 flex justify-between mx-8">
    <div class="font-light">
      {{ props.item?.itemName }}
    </div>
    <div class="text-right">
      <input type="checkbox" :checked="checked" class="checkbox checkbox-lg" />
    </div>
  </div>
  
</template>
