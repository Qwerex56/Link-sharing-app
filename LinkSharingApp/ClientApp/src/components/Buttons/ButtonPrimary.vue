<template>
  <button 
    class="px-[1.6875rem] py-[.6875rem] rounded-lg text-white bg-purple text-center
           hover:bg-purple-hover
           disabled:bg-purple disabled:opacity-25"
    @click="emitSubmit()"
  >
    <slot>
      Button
    </slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submitAction'): void
}>();

const emitSubmit = () => {
  emit('submitAction');
}

</script>