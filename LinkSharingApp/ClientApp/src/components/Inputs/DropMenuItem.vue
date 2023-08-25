<template>
  <li class="flex flex-row w-full gap-3">
    <img :src="props.itemLogo" alt="logo">
    <p class="peer">
      <slot>Item name</slot>
      <span class="peer hidden">(Selected)</span>
    </p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  itemLogo: {
    type: String,
    required: false,
    default: '/src/assets/Icons/icon-link.svg',
  },
});
</script>