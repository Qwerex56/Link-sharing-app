<template>
  <div class="group relative px-4 py-3 border rounded-lg border-borders hover:border-purple">
    <div @click="dropdownVisible = !dropdownVisible" v-on-click-outside="closeModal" class="flex flex-row w-full gap-3">
      <div v-if="active < 0" class="flex flex-row gap-3 w-full">
        <DropMenuItem>Select item from the list</DropMenuItem>
      </div>
      <div v-else class="flex flex-row gap-3 w-full">
        <DropMenuItem :item-logo="active.toString()">{{ active}}</DropMenuItem>
      </div>
      <MultiIcon :icon-fa="['fas', 'chevron-down']" />
    </div>
    <ul v-if="dropdownVisible" class="absolute w-full border rounded-lg border-borders bg-white overflow-hidden ">
      <DropMenuItem v-for="(item, index) in arr" :key="index"
        @click="ev => onLabelClick(ev)"
        :item-logo="'src/assets/Icons/icon-youtube.svg'"
        class="mx-4 px-4 py-3 border-b border-borders last-of-type:border-[transparent]"
        :class="active === index? 'text-red' : ''">
        {{ item }}
      </DropMenuItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import DropMenuItem from './DropMenuItem.vue';
import MultiIcon from '../utilities/MultiIcon.vue';

import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

const arr = ref([0, 1, 2, 3, 4, 5]);

const dropdownVisible = ref(false);
const active = ref(1);

const evTarget = ref<any>();

const closeModal = () => {
  dropdownVisible.value = false;
}

const onLabelClick = (ev: any) => {
  evTarget.value = ev.tsrget;
}

</script>