<template>
  <div class="flex flex-row">
    <div class="flex flex-row">
      <MultiIcon />
      <p>{{ props.socialLinkOptions }}</p>
    </div>
    <MultiIcon />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import MultiIcon from '../utilities/MultiIcon.vue';

const props = {
  socialLinkOptions: {
    type: Object as PropType<string>,
    required: true,
  }
}
</script>