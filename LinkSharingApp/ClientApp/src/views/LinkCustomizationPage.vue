<template>
  <NavigationBar />
  <PageContainer class="p-4 bg-gray-light">
    <InnerPageContainer class="bg-white py-4">
      <AddNewLink></AddNewLink>
      <LetsGetStarted class="mx-5"></LetsGetStarted>
      <LinkCustomizer class="mx-5"></LinkCustomizer>
      <div class="w-full h-[.0625rem] bg-gray-light"></div>
      <ButtonPrimary class="mx-4">
        Save
      </ButtonPrimary>
    </InnerPageContainer>
  </PageContainer>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import PageContainer from '@/components/utilities/PageContainer.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import AddNewLink from '@/widgets/AddNewLink.vue';
import LetsGetStarted from '@/widgets/LetsGetStarted.vue';
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue';
import LinkCustomizer from '@/widgets/LinkCustomizer.vue';
</script>