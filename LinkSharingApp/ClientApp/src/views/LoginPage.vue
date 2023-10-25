<template>
  <PageContainer>
    <MultiIcon :icon-img="devlinksLogo" />
    <LabelCard>
      <template #Header>
        Login
      </template>
      <template #Description>
        Add your details below to get back into the app
      </template>
    </LabelCard>
    <InnerPageContainer>
      <TextField
        input-type="email"
        place-hldr="e.g. alex@email.com"
      >
        Not a valid email
      </TextField>
      <TextField
        input-type="password"
        place-hldr="Enter your password"
      >
        Not a valid password
      </TextField>
      <ButtonPrimary
        :on-submit-action="() => $router.push({ path: '/LinkCustomization' })"
      >
        Login
      </ButtonPrimary>
      <LinkCard router-link="/Signup">
        <template #description>
          Don`t have an account?
        </template>
        <template #link>
          Create account?
        </template>
      </LinkCard>
    </InnerPageContainer>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from "@/components/utilities/PageContainer.vue";
import InnerPageContainer from "@/components/utilities/InnerPageContainer.vue";

import TextField from "@/components/Inputs/TextField.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIcon from "@/components/utilities/MultiIcon.vue";
import LinkCard from "@/components/utilities/LinkCard.vue";
import LabelCard from "@/components/utilities/LabelCard.vue";

import devlinksLogo from "@/assets/Logos/logo-devlinks-large.svg";

// import router from "../../router";

// const goToLinkCustomization = () => {
//   router.push("/LinkCustomization");
// }
</script>
