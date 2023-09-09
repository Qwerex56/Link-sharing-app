<template>
  <!-- Async component
  <suspense>
    <HelloWorld></HelloWorld>
  </suspense>
  
  Fetching data on the go
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
  </div> -->
  <ButtonTab
    :radio-group="'g'"
    :unique-id="'button'"
    @tab-click-ev="() => {}"
  />
  <ButtonTab
    :radio-group="'g'"
    :unique-id="'button'"
    @tab-click-ev="() => {}"
  />
  <ButtonTab
    :radio-group="'g'"
    :unique-id="'button'"
    @tab-click-ev="() => {}"
  />

  <TextField />

  <DropMenu />

  <ImageUploader />
</template>

<script setup lang="ts">
import ButtonTab from "./components/Buttons/ButtonTab.vue";
import TextField from "./components/Inputs/TextField.vue";
import DropMenu from "./components/Inputs/DropMenu.vue";
import ImageUploader from "./components/Buttons/ImageUploader.vue";

// import { ref } from "vue";

// let calledFetch = ref(false);
// let resText = ref("Default")

// const fetchData = async () => {
//   let response = await fetch('lsa/Hello/GetHello/');
//   resText.value = await response.text();

//   if (response.ok){
//     calledFetch.value = true;
//   }
// }
</script>
