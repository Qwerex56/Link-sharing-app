<template>
  <InnerPageContainer class="bg-gray-light flex flex-col items-center py-12">
    <MultiIcon
      class="h-20"
      :icon-img="IllustrationPhone"
    ></MultiIcon>
    <LabelCard class="text-center px-5">
      <template #Header>
        Let's get you started
      </template>
      <template #Description>
        Use the “Add new link” button to get started. 
        Once you have more than one link, you can reorder and edit them. 
        We’re here to help you share your profiles with everyone!
      </template>
    </LabelCard>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import LabelCard from '@/components/utilities/LabelCard.vue';
import MultiIcon from '@/components/utilities/MultiIcon.vue';

import IllustrationPhone from '@/assets/Illustrations/illustration-empty.svg'
</script>