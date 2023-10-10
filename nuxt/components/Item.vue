<script setup lang="ts">
const props = defineProps({
  item: Object as () => Item,
})

const checked = props.item?.status || false

const countCurrent = props.item?.lastModifier
const countNeeded = props.item?.quantity
</script>

<template>
  <div class="py-1 flex justify-between mx-8">
    <div v-if="checked" class="font-light line-through">
      {{ props.item?.itemName }}
    </div>

    <div v-else class="font-light">
      {{ props.item?.itemName }}
    </div>
    <div class="flex align-middle justify-center">
      <div class="text-xl font-light">
        {{ countCurrent }} / {{ countNeeded }}
      </div>
      <input
        type="checkbox"
        :checked="checked"
        class="checkbox checkbox-lg checkbox-success ml-4"
      />
    </div>
  </div>
</template>
