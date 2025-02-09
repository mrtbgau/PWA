<template>
  <div class="h-full overflow-y-auto">
    <div class="grid grid-cols-3 gap-5" v-if="photoList.length">
      <div
        v-for="(photo, index) in photoList"
        :key="index"
        class="flex flex-col items-center gap-4"
      >
        <img class="w-75 rounded-3xl" :src="photo" alt="Photo sauvegardée" />
        <BaseButton @click="deletePhoto(index)">Supprimer</BaseButton>
      </div>
    </div>
    <p v-else>Aucune photo enregistrée.</p>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import BaseButton from "../UI/BaseButton.vue";

const photoList = useStorage<string[]>("photo-list", []);

const deletePhoto = (index: number) => {
  photoList.value.splice(index, 1);
};
</script>
