<template>
  <div class="group relative px-4 py-3 border rounded-lg border-borders hover:border-purple">
    <div 
      @click="dropdownVisible = !dropdownVisible" 
      v-on-click-outside="closeList" 
      class="flex flex-row w-full gap-3">
      <div v-if="!active" class="flex flex-row gap-3 w-full">
        <DropMenuItem>
          <template #IconName>
            Select item from list
          </template>
        </DropMenuItem>
      </div>
      <div v-else class="flex flex-row gap-3 w-full">
        <DropMenuItem>
          <template #Icon>
            <MultiIcon :icon="(active?.icon as unknown as IItemLogo)" />
          </template>
          <template #IconName>
            {{ active.brandName }}
          </template>
        </DropMenuItem>
      </div>
      <MultiIcon :icon="(['fas', 'chevron-down'] as unknown as IItemLogo)" :class="dropdownVisible? '-scale-y-100' : 'scale-y-100'" />
    </div>
    <ul v-if="dropdownVisible" class="absolute w-full max-h-60 overflow-y-scroll border rounded-lg border-borders bg-white overflow-hidden left-0 top-[125%]">
      <DropMenuItem v-for="(item, index) in brandsArr" :key="index"
        @click="onLabelClick(item)"
        class="flex flex-row mx-4 px-4 py-3 border-b border-borders last-of-type:border-[transparent]"
        :class="active === item ? 'text-purple' : ''"
      >
        <template #Icon>
          <MultiIcon :icon="(item?.icon as unknown as IItemLogo)" />
        </template>
        <template #IconName>
          {{ item.brandName }}
          <p v-if="active?.brandName === item.brandName">
            ( Selected )
          </p>
        </template>
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

import IItemLogo from '@/modules/types/IItemLogo';
import Icon from '@/modules/types/IconType';

const brandsArr = ref(brandDropdownMenu);

const dropdownVisible = ref(false);
const active = ref<Icon>(null);

const closeList = () => {
  dropdownVisible.value = false;
}

const onLabelClick = (item: Icon) => {
  active.value = item;
}
</script>