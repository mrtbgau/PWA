<template>
  <div class="flex flex-col items-center gap-4">
    <label for="phoneInput" class="mb-2 text-2xl font-bold text-gray-700">
      Entrez un numéro de téléphone :
    </label>
    <input
      id="phoneInput"
      type="tel"
      v-model="phoneNumber"
      class="rounded-md border-3 border-gray-300 p-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:outline-none"
    />
    <BaseButton @click="makePhoneCall">Appeler</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./UI/BaseButton.vue";

const phoneNumber = ref<string>("");

const makePhoneCall = () => {
  window.location.href = `tel:${phoneNumber.value}`;
};
</script>
