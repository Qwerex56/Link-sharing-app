<template> 
  <EditorNavigationBar />
  <PageContainer class="bg-gray-light p-4">
    <RouterView />
  </PageContainer>
</template>

<script setup lang="ts">
import EditorNavigationBar from './components/Navigation/EditorNavigationBar.vue';
import PageContainer from './components/utilities/PageContainer.vue';
</script>
