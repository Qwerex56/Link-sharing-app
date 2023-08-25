<template>
  <li class="flex flex-row w-full gap-3">
    <MultiIcon :icon-img="props.itemLogo"/>
    <p class="peer">
      <slot>Item name</slot>
      <span class="peer hidden">(Selected)</span>
    </p>
  </li>
</template>

<script setup lang="ts">
import MultiIcon from '../utilities/MultiIcon.vue';

const props = defineProps({
  itemLogo: {
    type: String,
    required: false,
  },
});
</script>