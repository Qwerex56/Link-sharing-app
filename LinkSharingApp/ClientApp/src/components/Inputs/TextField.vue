<template>
  <div class="relative flex flex-col">
    <p class="font-instrument-sans text-xs pb-1 text-gray-dark">
      <slot name="TextFieldType">
        Lorem, ipsum dolor.
      </slot>
    </p>
    <input
      v-model="value" 
      :type="props.inputType"
      :placeholder="props.placeHldr"
      class="peer h-full w-full appearance-none rounded-lg border border-borders px-4 py-3 indent-[calc(2.75rem-1rem)] outline-none invalid:border-red focus:border-purple focus:shadow-purple"
      :class="[getErrorClass()]"
      @input="emitOnChange(($event.target as HTMLInputElement).value)"
    />
    <MultiIcon
      class="absolute w-4 left-6 -bottom-2/3 -translate-x-1/2 -translate-y-1/2"
      :icon-img="inputIcon"
    />
    <p
      class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-red inline-block"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { TypedSchema, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from 'zod';
import MultiIcon from "../utilities/MultiIcon.vue";
import { PropType } from "vue";
import { get } from "@vueuse/core";

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
  modelValue: {
    type: String,
    required: false,
    default: null
  },
  validationSchema: {
    type: Object as PropType<TypedSchema>,
    default: toTypedSchema(z.string()),
  }
});

const emit = defineEmits<{
  (e: 'onChange', msg: string): void,
  (e: 'update:modelValue', mVal: string) : void
}>();

const { value, errorMessage } = useField(() => props.modelValue, props.validationSchema, {
  syncVModel: true,
});

const emitOnChange = (ev: string) => {
  emit('onChange', ev);
}

const getErrorClass = (): string => {
  if (get(errorMessage) === undefined) {
    return '';
  }

  return '!border-red text-red';
}
</script>
