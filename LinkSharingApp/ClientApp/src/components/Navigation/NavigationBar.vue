<template>
  <nav class="flex flex-row place-content-between px-6 py-4 items-center">
    <MultiIcon :icon-img="LogoDevlinksSm" />
    <div class="flex flex-row">
      <ButtonTab
        radio-group="tab"
        unique-id="linksEd"
        :btn-icon="['fas', 'link']"
      >
        asdf
      </ButtonTab>
      <ButtonTab
        radio-group="tab"
        unique-id="account"
        :btn-icon="['fas', 'link']"
      />
    </div>
    <ButtonSecondary>
      <MultiIcon :icon="{logo: ['far', 'eye']}">
      </MultiIcon>
    </ButtonSecondary>
  </nav>
</template>

<script setup lang="ts">
import LogoDevlinksSm from "@/assets/Logos/logo-devlinks-small.svg";

import MultiIcon from "@/components/utilities/MultiIcon.vue";
import ButtonTab from "@/components/Buttons/ButtonTab.vue";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary.vue";
</script>