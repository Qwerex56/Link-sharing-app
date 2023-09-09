<template>
  <div class="flex">
    <FontAwesomeIcon
      v-if="Array.isArray(icon)"
      :icon="icon as string[]"
      class="align-middle"
    />
    <Icon 
      v-else-if="typeof icon == 'string'" 
      :icon="(icon as any)" 
    />
    <img
      v-else-if="props.iconImg"
      :src="props.iconImg"
      alt="icoI"
      class="align-middle"
    >
    <img 
      v-else 
      :src="defIcon" 
      alt="def" 
      class="align-middle" 
    >
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Icon } from "@iconify/vue";

import { PropType } from "vue";

import IItemLogo from "@/modules/types/IItemLogo";

const defIcon = "src/assets/Icons/icon-link.svg";

const props = defineProps({
  icon: {
    type: Object as PropType<IItemLogo>,
    default: " " as unknown as IItemLogo,
  },
  iconImg: {
    type: String,
    required: false,
    default: '',
  },
});
</script>
