<template>
  <div class="flex">
    <FontAwesomeIcon v-if="props.iconFa" :icon="props.iconFa" class="align-middle"></FontAwesomeIcon>
    <img v-else-if="props.iconImg" :src="props.iconImg" alt="icoI" class="align-middle">
    <img v-else :src="defIcon" alt="def" class="align-middle">
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const defIcon = 'src/assets/Icons/icon-link.svg';

const props = defineProps({
  iconFa: {
    type: Array<string>,
    required: false,
  },
  iconImg: {
    type: String,
    required: false,
  }
});

</script>