<template>
  <InnerPageContainer class="font-instrument-sans p-4 bg-gray-light">
    <div class="flex flex-row place-content-between">
      <div class="flex flex-row w-full">
        <MultiIcon />
        <h2 class="font-bold text-base text-gray-dark">
          Link {{ props.nextIter + 1 }}
        </h2>
      </div>
      <p
        class="text-gray"
        @click="linkStore.removeLink(props.linkInfo.linkId)"
      >
        Remove
      </p>
    </div>
    <div class="flex flex-col">
      <p class="text-gray-dark text-xs pb-1">
        Platform
      </p>
      <DropMenu
        :init-active="actIcon"
        @on-site-change="foo($event)"
      />
    </div>
    <TextField
      v-model="linkRef"
      place-hldr="e.g. https://www.github.com/johnappleseed"
      input-type="url"
      @on-change="ev => linkStore.setLinkUrl(ev as string, linkInfo.linkId)"
    >
      <template #TextFieldType>
        Link
      </template>
      <template #ErrorMsg>
      </template>
    </TextField>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import DropMenu from '@/components/Inputs/DropMenu.vue';
import MultiIcon from '@/components/utilities/MultiIcon.vue';
import TextField from '@/components/Inputs/TextField.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';

import useLinkStore from '@/stores/linkStore';

import { PropType, Ref, ref } from 'vue';
import { get } from '@vueuse/core';

import LinkType from '@/modules/types/LinkType';
import { Icon } from '@/modules/types/IconType';

const props = defineProps({
  linkInfo: {
    type: Object as PropType<LinkType>,
    required: true,
  },
  nextIter: {
    type: Number,
    required: true,
  }
});

const linkStore = useLinkStore();
const linkRef = ref(props.linkInfo.siteUrl);
const actIcon: Ref<Icon> = ref(null);

const foo = (x: Icon) => {
  actIcon.value = x;
  linkStore.getLinks[props.linkInfo.linkId].site = get(actIcon)?.brandName as string;
}
</script>