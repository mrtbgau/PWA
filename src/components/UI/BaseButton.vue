<template>
  <button
    :class="[
      'mr-1 cursor-pointer rounded-lg px-2.5 py-1 text-white outline-none',
      inverted
        ? 'border-none hover:bg-white/15'
        : 'border-3 border-solid border-violet-500 bg-violet-500 hover:border-violet-700 hover:bg-violet-700',
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
