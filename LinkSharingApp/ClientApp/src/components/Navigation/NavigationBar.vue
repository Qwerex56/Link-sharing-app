<template>
  <nav class="flex flex-row place-content-between px-6 py-4 items-center">
    <MultiIcon
      :icon-img="LogoDevlinksSm"
    />
    <div class="w-80 flex flex-row">
      <ButtonTab
        radio-group="tab"
        unique-id="linksEd"
        class="w-20"
      >
        <MultiIcon :icon-img="LogoDevlinksSm" />
      </ButtonTab>
      <ButtonTab
        radio-group="tab"
        unique-id="account"
        class="w-20"
      >
        <MultiIcon :icon-img="LogoDevlinksSm" />
      </ButtonTab>
    </div>
    <ButtonSecondary>
      <MultiIcon :icon="(['far', 'eye'] as unknown as IItemLogo)" />
    </ButtonSecondary>
  </nav>
</template>

<script setup lang="ts">
import LogoDevlinksSm from "@/assets/Logos/logo-devlinks-small.svg";

import MultiIcon from "@/components/utilities/MultiIcon.vue";
import ButtonTab from "@/components/Buttons/ButtonTab.vue";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary.vue";
import IItemLogo from "@/modules/types/IItemLogo";
</script>