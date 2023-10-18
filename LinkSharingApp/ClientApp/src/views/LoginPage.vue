<template>
  <MultiIcon :icon-img="devlinksLogo" />
  <PageContainer>
    <LabelCard>
      <template #Header> Login </template>
      <template #Description>
        Add your details below to get back into the app
      </template>
    </LabelCard>
    <div class="flex flex-col gap-6">
      <TextField
        input-type="email"
        place-hldr="e.g. alex@email.com"
        input-icon=""
      >
        Not a valid email
      </TextField>
      <TextField></TextField>
      <ButtonPrimary>Login</ButtonPrimary>
      <LinkCard>
        <template #description> Don`t have an account? </template>
        <template #link> Create account? </template>
      </LinkCard>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "@/components/utilities/PageContainer.vue";

import TextField from "@/components/Inputs/TextField.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIcon from "@/components/utilities/MultiIcon.vue";
import LinkCard from "@/components/utilities/LinkCard.vue";
import LabelCard from "@/components/utilities/LabelCard.vue";

import devlinksLogo from "@/assets/Logos/logo-devlinks-large.svg";
</script>
