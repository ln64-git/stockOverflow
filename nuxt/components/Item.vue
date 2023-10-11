<script setup lang="ts">
import setItemComplete from '~/utils/server/item/set-item-complete';
import setItemIncomplete from '~/utils/server/item/set-item-incomplete';
import toggleItemStatus from '~/utils/server/item/toggle-item-status';

const props = defineProps({
  item: Object as () => Item,
});
const checked = props.item?.status || false;
const countCurrent = props.item?.lastModifier;
const countNeeded = props.item?.quantity;

const handleClick = () => {
  const groupId = props.item?.groupId || 0;
  const listId = props.item?.listId || 0;
  const itemId = props.item?.itemId || 0;
  const item = props.item
  toggleItemStatus(item, groupId, listId, itemId);
};
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
        @click="handleClick"
      />
    </div>
  </div>
</template>
