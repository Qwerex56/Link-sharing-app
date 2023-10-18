<template>
  <div
    class="flex text-center font-instrument-sans text-base font-normal mobile:flex-col"
  >
    <p class="">
      <slot name="description"></slot>
    </p>
    <a href="" class="text-purple hover:text-purple-hover"
      ><slot name="link"></slot
    ></a>
  </div>
</template>
