<template>
  <InnerPageContainer>
    <div class="flex flex-row justify-evenly p-4 gap-4">
      <ButtonSecondary class="w-full">
        Back to Editor
      </ButtonSecondary>
      <ButtonPrimary class="w-full">
        Share Link
      </ButtonPrimary>
    </div>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import InnerPageContainer from '../utilities/InnerPageContainer.vue';
import ButtonPrimary from '../Buttons/ButtonPrimary.vue';
import ButtonSecondary from '../Buttons/ButtonSecondary.vue';
</script>