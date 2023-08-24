<template>
  <div class="flex flex-row relative border-borders rounded-lg ">
    <img :src="'holder'" alt="" class="absolute w-4 -translate-x-1/2 -translate-y-1/2 top-1/2 right-0">
    <input type="text" :placeholder="props.placeHldr" class="appearance-none w-full h-full">
    <p class="hidden">

    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeHldr: {
    type: String,
    required: false,
    default: '',
  },
  inputIcon: {
    type: String,
    required: false,
    default: 'src/assets/Icons/icon-link.svg',
  },
});
</script>