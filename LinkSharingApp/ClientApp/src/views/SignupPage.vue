<template>
  <MultiIconVue />
  <PageContainer>
    <LabelCard>
      <template #Header> Create account </template>
      <template #Description>
        Let's get you started sharing your links!
      </template>
    </LabelCard>
    <div>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <LabelCard>
        <template #Description>
          Password must contain at least 8 characters
        </template>
      </LabelCard>
      <ButtonPrimary>Create new account</ButtonPrimary>
      <LinkCard router-link="/">
        <template #description> Already have an account? </template>
        <template #link> Login </template>
      </LinkCard>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "@/components/utilities/PageContainer.vue";
import LinkCard from "@/components/utilities/LinkCard.vue";
import LabelCard from "@/components/utilities/LabelCard.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIconVue from "@/components/utilities/MultiIcon.vue";
import TextField from "@/components/Inputs/TextField.vue";
</script>
