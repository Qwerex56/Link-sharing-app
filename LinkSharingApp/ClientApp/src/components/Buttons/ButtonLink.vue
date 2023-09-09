<template>
  <a 
    :href="props.siteLink" 
    class="flex flex-row gap-2 rounded-lg p-4 align-middle text-white" 
    :class="props.bgColor"
  >
    <img 
      :src="props.linkLogo" 
      alt="logo" 
      class="w-5"
    >
    <slot> SiteName </slot>
    <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
  </a>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  siteLink: {
    type: String,
    required: false,
    default: "#",
  },
  linkLogo: {
    type: String,
    required: false,
    default: "src/assets/Icons/icon-link.svg",
  },
  bgColor: {
    type: String,
    required: false,
    default: "bg-black",
  },
});
</script>
