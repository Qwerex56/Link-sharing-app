<template>
  <MultiIcon :icon-img="devlinksLogo" />
  <!-- Label card here -->
  <LabelCard></LabelCard>
  <TextField></TextField>
  <TextField></TextField>
  <ButtonPrimary></ButtonPrimary>
  <!-- Here label with link and description -->
  <LinkCard></LinkCard>
</template>

<script setup lang="ts">
import TextField from "@/components/Inputs/TextField.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIcon from "@/components/utilities/MultiIcon.vue";
import LinkCard from "@/components/utilities/LinkCard.vue";
import LabelCard from "@/components/utilities/LabelCard.vue";

import devlinksLogo from "@/assets/Logos/logo-devlinks-large.svg";
</script>
