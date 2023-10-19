<template>
  <div
    class="flex text-center font-instrument-sans text-base font-normal mobile:flex-col"
  >
    <p class="">
      <slot name="description"></slot>
    </p>
    <router-link
      :to="props.routerLink"
      class="text-purple hover:text-purple-hover"
    >
      <slot name="link"></slot>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  routerLink: {
    type: String,
    default: "/",
    required: true,
  },
});
</script>
