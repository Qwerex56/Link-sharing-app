<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

let calledFetch = ref(false);
let resText = ref("Default")

const fetchData = async () => {
  let response = await fetch('api/Hello/GetHello/');
  resText.value = await response.text();
  
  if (response.ok){
    calledFetch.value = true;
  }
}
</script>

<template>
  <!-- Async component -->
  <suspense>
    <HelloWorld></HelloWorld>
  </suspense>
  
  <!-- Fetching data on the go -->
  <div>
    <button @click="fetchData">
      Click me to fetch data
    </button>
    <div>
      Data fetched: 
      <p v-if="calledFetch">
        {{ resText }}
      </p>
      <p v-if="!calledFetch">
        waiting for call, please click the button
      </p>
    </div>
  </div>
</template>
