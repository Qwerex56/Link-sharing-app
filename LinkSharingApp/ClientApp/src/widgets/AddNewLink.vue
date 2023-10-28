<template>
  <InnerPageContainer class="p-6">
    <LabelCard class="mb">
      <template #Header>
        Customize your links
      </template>
      <template #Description>
        Add/edit/remove links below and then share all your profiles with the world!
      </template>
    </LabelCard>
    <ButtonSecondary>+ Add new link</ButtonSecondary>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import LabelCard from '@/components/utilities/LabelCard.vue';
import ButtonSecondary from '@/components/Buttons/ButtonSecondary.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
</script>