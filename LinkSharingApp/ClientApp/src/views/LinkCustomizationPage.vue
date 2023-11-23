<template>
  <PageContainer class="p-4 bg-gray-light">
    <InnerPageContainer class="bg-white py-4">
      <AddNewLink v-if="linkStore.getLinks.length < 32" />
      <LetsGetStarted
        v-if="linkStore.getLinks.length <= 0"
        class="mx-5"
      ></LetsGetStarted>
      <draggable
        :list="linkStore.getLinks"
        item-key="linkId"
        class="mx-5"
      >
        <template #item="{ element }">
          <LinkCustomizer
            class="mb-2 last:mb-0" 
            :link-info="element"
            :next-iter="linkStore.getLinks.findIndex(id => id.linkId === element.linkId)"
          />
        </template>
      </draggable>
      <PageBar />
      <ButtonPrimary
        class="mx-4"
        @submit-action="saveLinks"
      >
        Save
      </ButtonPrimary>
    </InnerPageContainer>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/utilities/PageContainer.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import AddNewLink from '@/widgets/AddNewLink.vue';
import LetsGetStarted from '@/widgets/LetsGetStarted.vue';
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue';
import LinkCustomizer from '@/widgets/LinkCustomizer.vue';
import PageBar from '@/components/utilities/PageBar.vue'
import draggable from 'vuedraggable';

import useLinkStore from '@/stores/linkStore';

const linkStore = useLinkStore();

const saveLinks = async () => {
  // push link array to db
  console.log('saveLinks');
  return;
}
</script>