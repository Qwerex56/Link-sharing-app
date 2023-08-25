<template>
  <div class="flex flex-row relative">
    <MultiIcon :icon-fa="['fas', 'link']" class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-6"/>
    <input :type="props.inputType" :placeholder="props.placeHldr" @submit="emitSubmitValidation()" 
      class="peer appearance-none outline-none w-full h-full px-4 py-3 border rounded-lg border-borders indent-[calc(2.75rem-1rem)]
           focus:border-purple focus:shadow-purple invalid:border-red">
    <p class="absolute hidden -translate-y-1/2 top-1/2 right-4 text-red text-xs peer-invalid:inline-block">
      <span>Lorem, ipsum dolor.</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import MultiIcon from '../utilities/MultiIcon.vue';

const props = defineProps({
  inputType: {
    type: String,
    required: false,
    default: 'email',
  },
  placeHldr: {
    type: String,
    required: false,
    default: 'lorem ipsum dolor.',
  },
  inputIcon: {
    type: String,
    required: false,
    default: 'src/assets/Icons/icon-link.svg',
  },
});

const emit = defineEmits<{
  (e: 'SubmitValidation'): void,
}>();

const emitSubmitValidation = () => {
  emit('SubmitValidation');
}
</script>