<template>
  <MultiIcon :icon-img="devlinksLogo" />
  <!-- Label card here -->
  <TextField></TextField>
  <TextField></TextField>
  <ButtonPrimary></ButtonPrimary>
  <!-- Here label with link and description -->
</template>

<script setup lang="ts">
import TextField from "@/components/Inputs/TextField.vue";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";
import MultiIcon from "@/components/utilities/MultiIcon.vue";

import devlinksLogo from "@/assets/Logos/logo-devlinks-large.svg";
</script>
