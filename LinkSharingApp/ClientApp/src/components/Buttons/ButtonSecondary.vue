<template>
  <button
    class="rounded-lg border-purple border bg-white px-[1.6875rem] py-[.6875rem] text-center text-purple hover:bg-purple-light disabled:opacity-25"
    @click="emitSubmit()"
  >
    <slot>  </slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: "submitAction"): void }>();

const emitSubmit = () => {
  emit("submitAction");
};
</script>
