<template>
  <NavigationBar></NavigationBar>
  <PageContainer>
    <LabelCard></LabelCard>
    <InnerPageContainer>
      <ImageUploader></ImageUploader>
      <p></p>
    </InnerPageContainer>
    <InnerPageContainer>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
    </InnerPageContainer>
    <ButtonPrimary></ButtonPrimary>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/utilities/PageContainer.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import LabelCard from '@/components/utilities/LabelCard.vue';
import ImageUploader from '@/components/Buttons/ImageUploader.vue';
import TextField from '@/components/Inputs/TextField.vue';
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue';
import NavigationBar from '@/components/Navigation/NavigationBar.vue';
</script>