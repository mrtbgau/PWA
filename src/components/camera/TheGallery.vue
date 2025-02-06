<template>
  <div>
    <div v-if="photoList.length">
      <div v-for="(photo, index) in photoList" :key="index" class="photo-item">
        <img :src="photo" alt="Photo sauvegardée" />
        <button @click="deletePhoto(index)">Supprimer</button>
      </div>
    </div>
    <p v-else>Aucune photo enregistrée.</p>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const photoList = useStorage<string[]>("photo-list", []);

const deletePhoto = (index: number) => {
  photoList.value.splice(index, 1);
};
</script>
