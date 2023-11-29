<template>
  <nav
    v-if="['/LinkCustomization', '/ProfileDetails'].includes($route.fullPath)"
    class="flex flex-row place-content-between px-6 py-4 items-center"
  >
    <MultiIcon
      :icon-img="LogoDevlinksSm"
    />
    <div class="w-80 flex flex-row">
      <ButtonTab
        radio-group="tab"
        unique-id="linksEd"
        class="w-20"
        :active="'/LinkCustomization' === $route.fullPath"
        @tab-click-ev="() => $router.push('/LinkCustomization')"
      >
        <MultiIcon :icon-img="profileIco" />
      </ButtonTab>
      <ButtonTab
        radio-group="tab"
        unique-id="account"
        class="w-20"
        :active="'/ProfileDetails' === $route.fullPath"
        @tab-click-ev="() => $router.push('/ProfileDetails')"
      >
        <MultiIcon :icon-img="linkIco" />
      </ButtonTab>
    </div>
    <ButtonSecondary>
      <MultiIcon :icon-img="eyeIco" />
    </ButtonSecondary>
  </nav>
</template>

<script setup lang="ts">
import LogoDevlinksSm from "@/assets/Logos/logo-devlinks-small.svg";
import profileIco from '@/assets/Icons/icon-profile-details-header.svg';
import linkIco from '@/assets/Icons/icon-links-header.svg';
import eyeIco from '@/assets/Icons/icon-preview-header.svg';

import MultiIcon from "@/components/utilities/MultiIcon.vue";
import ButtonTab from "@/components/Buttons/ButtonTab.vue";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary.vue";
</script>