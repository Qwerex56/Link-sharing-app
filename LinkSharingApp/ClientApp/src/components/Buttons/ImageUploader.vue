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
      :src="profilePicture as string"
      alt="d"
      class="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 object-cover"
    />
    <div
      class="absolute flex flex-col text-purple drop-shadow-[0_0_0_8px_rgba(0,0,0,1)]"
      :class="{ 'text-white': isImageUploaded() }"
    >
      <MultiIcon
        :icon="['far', 'image'] as unknown as IItemLogo"
        class="h-10 self-center"
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
import IItemLogo from "@/modules/types/IItemLogo";
import MultiIcon from "../utilities/MultiIcon.vue";
import { computed, ref } from "vue";
import { get } from "@vueuse/core";

const profilePicture = ref<string | null>(null);

const onFileChanged = (ev: Event) => {
  const element = ev.currentTarget as HTMLInputElement;
  const file = element.files?.item(0) as File;

  console.log(file);

  profilePicture.value = URL.createObjectURL(file);
};

const isImageUploaded = () => {
  return get(profilePicture) != null;
};

const getMsgText = computed(() => {
  return get(profilePicture) != null ? "Change Image" : "+ Upload Image";
});

const uploadImage = async (picture: string) => {
  // TODO: Make sure that the image is uploaded to valid url
  fetch("/api/urlToPictureController", {
    method: "PUT",
    headers: {
      "Content-type": "multipart/form-data",
    },
    body: JSON.stringify(picture),
  });
};
</script>
