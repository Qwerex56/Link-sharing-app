<template>
  <li class="flex flex-row w-full gap-3">
    <slot name="Icon">
      <MultiIcon class="self-center" />
    </slot>
    <slot name="IconName">Item name</slot>
  </li>
</template>

<script setup lang="ts">
import MultiIcon from '../utilities/MultiIcon.vue';
</script>