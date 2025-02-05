<template>
  <button
    :class="[
      'mr-1 cursor-pointer rounded-xs px-2.5 py-1 outline-none',
      inverted
        ? 'text-white hover:bg-white/15'
        : 'border-3 border-solid border-violet-500 bg-black text-violet-500 hover:bg-violet-500 hover:text-black',
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  onClick: () => void;
  inverted?: boolean;
}>();
</script>
