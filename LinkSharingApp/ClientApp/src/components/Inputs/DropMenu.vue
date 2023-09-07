<template>
  <div class="group relative px-4 py-3 border rounded-lg border-borders hover:border-purple">
    <div 
      @click="dropdownVisible = !dropdownVisible" 
      v-on-click-outside="closeList" 
      class="flex flex-row w-full gap-3">
      <div v-if="!active" class="flex flex-row gap-3 w-full">
        <DropMenuItem>{{ $t('messeges.hello') }}</DropMenuItem>
      </div>
      <div v-else class="flex flex-row gap-3 w-full">
        <DropMenuItem :item-logo="active.icon">{{ active.brandName }}</DropMenuItem>
      </div>
      <MultiIcon :icon-fa="['fas', 'chevron-down']" :class="dropdownVisible? '-scale-y-100' : 'scale-y-100'" />
    </div>
    <ul v-if="dropdownVisible" class="absolute w-full max-h-60 overflow-y-scroll border rounded-lg border-borders bg-white overflow-hidden left-0 top-[125%]">
      <DropMenuItem v-for="(item, index) in brandsArr" :key="index"
        @click="onLabelClick(item)"
        :item-logo="item.icon"
        class="flex flex-row mx-4 px-4 py-3 border-b border-borders last-of-type:border-[transparent]"
        :class="active === item ? 'text-purple' : ''"
      >
        {{ item.brandName }}
        <p v-if="active?.brandName === item.brandName">
          ( Selected )
        </p>
      </DropMenuItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import DropMenuItem from './DropMenuItem.vue';
import MultiIcon from '../utilities/MultiIcon.vue';

import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import brandDropdownMenu from '@/modules/dropdownMenuData/brandDropdownData.json';

const brandsArr = ref(brandDropdownMenu);

const dropdownVisible = ref(false);
const active = ref<{
  icon: string[],
  brandName: string
} | null>(null);

const closeList = () => {
  dropdownVisible.value = false;
}

const onLabelClick = (item: {
  icon: string[],
  brandName: string,
}) => {
  brandsArr.value.sort((a, b) => sortBrands(a, b));
  active.value = item;
}

const sortBrands = (aItem: {
  icon: string[],
  brandName: string,
}, bItem: {
  icon: string[],
  brandName: string,
}) => {
  return aItem.brandName.localeCompare(bItem.brandName);

  // TODO: Set active item to top

  if (aItem.brandName === active.value?.brandName) {
    return 0;
  }
}

</script>