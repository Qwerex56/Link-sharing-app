<template>
  <PageContainer>
    <MultiIconVue
      :icon-img="DevLinksLogo"
    />
    <LabelCard>
      <template #Header>
        Create account
      </template>
      <template #Description>
        Let's get you started sharing your links!
      </template>
    </LabelCard>
    <InnerPageContainer>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <LabelCard class="text-xs">
        <template
          #Description
        >
          <p
            class="text-xs"
          >
            Password must contain at least 8 characters
          </p>
        </template>
      </LabelCard>
      <ButtonPrimary>Create new account</ButtonPrimary>
      <LinkCard router-link="/">
        <template #description>
          Already have an account?
        </template>
        <template #link>
          Login
        </template>
      </LinkCard>
    </InnerPageContainer>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "@/components/utilities/PageContainer.vue";
import InnerPageContainer from "@/components/utilities/InnerPageContainer.vue";
import LinkCard from "@/components/utilities/LinkCard.vue";
import LabelCard from "@/components/utilities/LabelCard.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIconVue from "@/components/utilities/MultiIcon.vue";
import TextField from "@/components/Inputs/TextField.vue";

import DevLinksLogo from "@/assets/Logos/logo-devlinks-large.svg";
</script>
