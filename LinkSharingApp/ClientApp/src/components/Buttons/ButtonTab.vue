<template>
  <div
    class="group relative flex w-full h-fit flex-row justify-center overflow-hidden rounded-lg text-gray"
  >
    <input
      :id="props.uniqueId"
      type="radio"
      :name="props.radioGroup"
      :checked="active"
      class="peer hover:cursor-pointer h-[2.875rem] w-full appearance-none bg-[transparent] checked:bg-purple-hover"
      @click="emitClickEvent()"
    />
    <label
      :for="props.uniqueId"
      class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row gap-2 group-hover:text-purple peer-checked:text-purple"
    >
      <slot> Tab Name </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  radioGroup: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits<{
  (e: "tabClickEv"): void;
}>();

const emitClickEvent = () => {
  emits("tabClickEv");
};
</script>
