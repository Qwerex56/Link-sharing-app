<template>
  <li class="flex flex-row w-full gap-3">
    <MultiIcon :icon-fa="props.itemLogo" class="self-center" />
    <slot>Item name</slot>
  </li>
</template>

<script setup lang="ts">
import MultiIcon from '../utilities/MultiIcon.vue';

const props = defineProps({
  itemLogo: {
    type: Array<string>,
    required: false,
  },
});
</script>