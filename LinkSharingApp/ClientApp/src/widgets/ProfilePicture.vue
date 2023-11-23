<template>
  <InnerPageContainer class="p-5 bg-gray-light">
    <div class="flex flex-col gap-4">
      <p class="text-base font-instrument-sans text-gray">
        Profile picture
      </p>
      <ImageUploader></ImageUploader>
    </div>
    <p class="text-sm font-instrument-sans text-gray">
      Image must be below 1024x1024px. Use PNG or JPG format.
    </p>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import ImageUploader from '@/components/Buttons/ImageUploader.vue';
</script>