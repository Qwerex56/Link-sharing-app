<template>
  <InnerPageContainer class="font-instrument-sans p-4 bg-gray-light">
    <div class="flex flex-row place-content-between">
      <div class="flex flex-row w-full">
        <MultiIcon></MultiIcon>
        <h2 class="font-bold text-base text-gray-dark">
          Link #LP
        </h2>
      </div>
      <p class="text-gray">
        Remove
      </p>
    </div>
    <div class="flex flex-col">
      <p class="text-gray-dark text-xs pb-1">
        Platform
      </p>
      <DropMenu></DropMenu>
    </div>
    <TextField place-hldr="e.g. https://www.github.com/johnappleseed">
      <template #TextFieldType>
        Link
      </template>
      <template #ErrorMsg>
        Please check the URL
      </template>
    </TextField>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import DropMenu from '@/components/Inputs/DropMenu.vue';
import MultiIcon from '@/components/utilities/MultiIcon.vue';
import TextField from '@/components/Inputs/TextField.vue';
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
</script>