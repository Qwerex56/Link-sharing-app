<template>
  <div>
    <input type="checkbox" name="" id="List" class="peer appearance-none w-full h-full">
    <div>
      <label for="List">
        <img src="src\assets\Icons\icon-link.svg" alt="">
      </label>
      <img src="src\assets\Icons\icon-chevron-down.svg" alt="s/h list">
    </div>
    <ul class="peer-checked:inline-block border border-borders ">
      <slot name="ListItems">

      </slot>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>