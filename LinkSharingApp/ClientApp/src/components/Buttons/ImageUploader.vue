<template>
  <label class="relative aspect-square">
    <input 
      type="file"
      accept=".jpg, .jpeg, .png" 
      class="hidden" 
    >
    <div class="absolute">
      <MultiIcon :icon="['far', 'image'] as unknown as IItemLogo" />
      <p>+ Upload Image</p>
    </div>
  </label>
</template>

<script setup lang="ts">
import IItemLogo from "@/modules/types/IItemLogo";
import MultiIcon from "../utilities/MultiIcon.vue";
</script>
