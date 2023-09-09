<template>
  <div
    class="group relative rounded-lg border border-borders px-4 py-3 hover:border-purple"
  >
    <div
      v-on-click-outside="closeList"
      class="flex w-full flex-row gap-3"
      @click="dropdownVisible = !dropdownVisible"
    >
      <div 
        v-if="!active" 
        class="flex w-full flex-row gap-3"
      >
        <DropMenuItem>
          <template #IconName> 
            Select item from list 
          </template>
        </DropMenuItem>
      </div>
      <div 
        v-else 
        class="flex w-full flex-row gap-3"
      >
        <DropMenuItem>
          <template #Icon>
            <MultiIcon :icon="active?.icon as unknown as IItemLogo" />
          </template>
          <template #IconName>
            {{ active.brandName }}
          </template>
        </DropMenuItem>
      </div>
      <MultiIcon
        :icon="['fas', 'chevron-down'] as unknown as IItemLogo"
        :class="dropdownVisible ? '-scale-y-100' : 'scale-y-100'"
      />
    </div>
    <ul
      v-if="dropdownVisible"
      class="absolute left-0 top-[125%] max-h-60 w-full overflow-hidden overflow-y-scroll rounded-lg border border-borders bg-white"
    >
      <DropMenuItem
        v-for="(item, index) in brandsArr"
        :key="index"
        class="mx-4 flex flex-row border-b border-borders px-4 py-3 last-of-type:border-[transparent]"
        :class="active === item ? 'text-purple' : ''"
        @click="onLabelClick(item)"
      >
        <template #Icon>
          <MultiIcon :icon="item?.icon as unknown as IItemLogo" />
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
import DropMenuItem from "./DropMenuItem.vue";
import MultiIcon from "../utilities/MultiIcon.vue";

import { ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";

import brandDropdownMenu from "@/modules/dropdownMenuData/brandDropdownData.json";

import IItemLogo from "@/modules/types/IItemLogo";
import Icon from "@/modules/types/IconType";

const brandsArr = ref(brandDropdownMenu);

const dropdownVisible = ref(false);
const active = ref<Icon>(null);

const closeList = () => {
  dropdownVisible.value = false;
};

const onLabelClick = (item: Icon) => {
  active.value = item;
};
</script>
