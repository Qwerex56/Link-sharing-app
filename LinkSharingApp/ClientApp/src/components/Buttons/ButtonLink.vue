<template>
  <a :href="props.siteLink" class="flex flex-row p-4 gap-2 align-middle rounded-lg text-white" :class="props.bgColor">
    <img :src="props.linkLogo" alt="logo" class="w-5">
    <slot>
      SiteName
    </slot>
    <img src="src/assets/Icons/icon-arrow-right.svg" alt="Go"
      class="self-end w-4">
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  siteLink: {
    type: String,
    required: false,
    default: '#',
  },
  linkLogo: {
    type: String,
    required: false,
    default: 'src/assets/Icons/icon-link.svg',
  },
  bgColor: {
    type: String,
    required: false,
    default: 'bg-black',
  },
});

</script>