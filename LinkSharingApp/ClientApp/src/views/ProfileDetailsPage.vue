<template>
  <PageContainer class="p-4 bg-white">
    <LabelCard>
      <template #Header>
        Profile Details
      </template>
      <template #Description>
        Add your details to create a personal touch to your profile.
      </template>
    </LabelCard>
    <ProfilePicture />
    <PersonalInfo />
    <PageBar />
    <ButtonPrimary></ButtonPrimary>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/utilities/PageContainer.vue';
import LabelCard from '@/components/utilities/LabelCard.vue';
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue';
import PersonalInfo from '@/widgets/PersonalInfo.vue';
import ProfilePicture from '@/widgets/ProfilePicture.vue'
import PageBar from '@/components/utilities/PageBar.vue';
</script>