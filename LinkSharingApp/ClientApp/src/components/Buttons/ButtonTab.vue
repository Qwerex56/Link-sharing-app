<template>
  <div 
    class="group flex flex-row h-fit justify-center relative overflow-hidden rounded-lg text-gray">
    <input 
      type="radio" :name="props.radioGroup" :id="props.uniqueId" 
      class="peer appearance-none w-full bg-[transparent] h-[2.875rem] checked:bg-purple-hover"
      @click="emitClickEvent()">
    <label :for="props.uniqueId" class="absolute flex flex-row gap-2 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 peer-checked:text-purple">
      <img :src="props.btnIcon" alt="Tab" 
        class="w-5">
      <slot>
        Tab Name
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  radioGroup: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
  },
  btnIcon: {
    type: String,
    required: false,
    default: 'src/assets/Icons/icon-link.svg',
  }
});

const emits = defineEmits<{
  (e: 'tabClickEv'): void
}>();

const emitClickEvent = () => {
  emits('tabClickEv');
}
</script>