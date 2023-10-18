<template>
  <div class="flex flex-col gap-1.5">
    <h2 class="font-instrument-sans text-2xl font-bold text-gray-dark">
      <slot name="Header"></slot>
    </h2>
    <p class="font-instrument-sans text-base font-normal text-gray">
      <slot name="Description"></slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>
