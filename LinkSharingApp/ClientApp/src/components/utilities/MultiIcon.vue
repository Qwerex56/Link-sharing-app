<template>
  <div class="flex h-full">
    <FontAwesomeIcon
      v-if="Array.isArray(icon)"
      :icon="icon.logo as string[]"
      class="h-full align-middle"
    />
    <Icon
      v-else-if="icon != null"
      :icon="icon as any"
    />
    <img
      v-else-if="props.iconImg"
      :src="props.iconImg"
      alt="icoI"
      class="h-full align-middle"
    />
    <img
      v-else
      :src="defIcon"
      alt="def"
      class="h-full align-middle"
    />
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
    default: null as unknown as IItemLogo,
  },
  iconImg: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
