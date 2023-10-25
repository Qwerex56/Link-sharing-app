<template>
  <div class="relative flex flex-col">
    <p class="font-instrument-sans text-xs pb-1 text-gray-dark">
      <slot name="TextFieldType">
        Lorem, ipsum dolor.
      </slot>
    </p>
    <input
      :type="props.inputType"
      :placeholder="props.placeHldr"
      class="peer h-full w-full appearance-none rounded-lg border border-borders px-4 py-3 indent-[calc(2.75rem-1rem)] outline-none invalid:border-red focus:border-purple focus:shadow-purple"
      @submit="emitSubmitValidation()"
    />
    <MultiIcon
      :icon-fa="['fas', 'link']"
      class="absolute w-4 left-6 -bottom-2/3 -translate-x-1/2 -translate-y-1/2"
    />
    <p
      class="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs text-red peer-invalid:inline-block"
    >
      <slot name="ErrorMsg">
        Lorem, ipsum dolor.
      </slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import MultiIcon from "../utilities/MultiIcon.vue";

const props = defineProps({
  inputType: {
    type: String,
    required: false,
    default: "text",
  },
  placeHldr: {
    type: String,
    required: false,
    default: "lorem ipsum dolor.",
  },
  inputIcon: {
    type: String,
    required: false,
    default: "src/assets/Icons/icon-link.svg",
  },
});

const emit = defineEmits<{
  (e: "SubmitValidation"): void;
}>();

const emitSubmitValidation = () => {
  emit("SubmitValidation");
};
</script>
