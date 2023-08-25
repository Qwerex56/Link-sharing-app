<template>
  <a :href="props.siteLink" class="flex flex-row p-4 gap-2 align-middle rounded-lg text-white" :class="props.bgColor">
    <img :src="props.linkLogo" alt="logo" class="w-5">
    <slot>
      SiteName
    </slot>
    <FontAwesomeIcon :icon="['fas', 'arrow-right']"></FontAwesomeIcon>
  </a>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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