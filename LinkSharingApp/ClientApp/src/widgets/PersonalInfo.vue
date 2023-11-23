<template>
  <InnerPageContainer class="p-4 bg-gray-light">
    <TextField>
      <template #TextFieldType>
        First name*
      </template>
    </TextField>
    <TextField>
      <template #TextFieldType>
        Last name*
      </template>
    </TextField>
    <TextField
      :init-value="`adrian`"
    >
      <template #TextFieldType>
        Email
      </template>
    </TextField>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import TextField from '@/components/Inputs/TextField.vue';
</script>
