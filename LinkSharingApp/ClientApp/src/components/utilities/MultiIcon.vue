<template>
  <div class="flex h-full">
    <img
      :src="icon?.icon?? iconImg"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Icon } from "@/modules/types/IconType";

defineProps({
  icon: {
    type: Object as PropType<Icon>,
    default: null,
  },
  iconImg: {
    type: String,
    default: "src/assets/Icons/icon-link.svg",
  }
});
</script>
