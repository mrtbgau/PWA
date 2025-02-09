<template>
  <div class="w-full">
    <div class="bg-opacity-10 flex flex-row gap-4 bg-black p-4">
      <input
        type="text"
        class="w-full rounded-md border-3 border-gray-300 p-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:outline-none"
      />
      <BaseButton>Envoyer</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../UI/BaseButton.vue";
</script>
