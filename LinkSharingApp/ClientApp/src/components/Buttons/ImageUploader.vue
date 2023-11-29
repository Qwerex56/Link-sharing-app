<template>
  <label
    class="relative inline-block aspect-square w-[12.0625rem] overflow-hidden rounded-xl bg-purple-light px-[2.375rem] py-[3.75rem] text-white"
  >
    <input
      type="file"
      accept="image/*"
      class="hidden"
      @change="onFileChanged"
    />
    <img
      :src="getProfilePicture?? BLANK_IMAGE"
      class="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      :class="{ 'brightness-75' : isImageUploaded() }"
    />
    <div
      class="absolute flex flex-col"
    >
      <MultiIcon
        :icon-img="IconLink"
        class="h-10 self-center"
        :class="{'brightness-0 invert' : isImageUploaded()}"
      />
      <p
        class="text-center text-base font-semibold text-purple"
        :class="{ 'text-white': isImageUploaded() }"
      >
        {{ getMsgText }}
      </p>
    </div>
  </label>
</template>

<script setup lang="ts">
import MultiIcon from "../utilities/MultiIcon.vue";

import { computed } from "vue";
import useProfileStore from "@/stores/profileStore";

import IconLink from "@/assets/Icons/icon-upload-image.svg";
import { storeToRefs } from "pinia";
import { get } from "@vueuse/core";
import { BLANK_IMAGE } from "@/modules/EditorConsts";

const { getProfilePicture } = storeToRefs(useProfileStore());
const { setProfilePicture } = useProfileStore();

const onFileChanged = (ev: Event) => {
  const element = ev.currentTarget as HTMLInputElement;
  const file = element.files?.item(0) as File;
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = e =>
    setProfilePicture(e.target?.result as string)
};

const isImageUploaded = () => {
  return get(getProfilePicture) !== null;
};

const getMsgText = computed(() => {
  return isImageUploaded() ? "Change Image" : "+ Upload Image";
});
</script>
