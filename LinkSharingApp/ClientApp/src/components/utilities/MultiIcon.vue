<template>
  <div class="flex">
    <FontAwesomeIcon v-if="props.iconFa" :icon="props.iconFa" class="align-middle" />
    <Icon v-else-if="props.iconIfy" :icon="props.iconIfy"/>
    <img v-else-if="props.iconImg" :src="props.iconImg" alt="icoI" class="align-middle">
    <img v-else :src="defIcon" alt="def" class="align-middle">
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Icon } from '@iconify/vue';

const defIcon = 'src/assets/Icons/icon-link.svg';

const props = defineProps({
  iconFa: {
    type: Array<string>,
    required: false,
  },
  iconIfy: {
    type: String,
    require: false,
  },
  iconImg: {
    type: String,
    required: false,
  }
});

</script>