<template>
  <button
    class="mr-1 cursor-pointer rounded-xs border-3 border-solid border-violet-500 bg-black px-2.5 py-1 outline-none hover:bg-violet-500"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  onClick: () => void;
}>();
</script>
