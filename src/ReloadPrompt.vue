<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";
import BaseButton from "./components/UI/BaseButton.vue";

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

async function close() {
  offlineReady.value = false;
  needRefresh.value = false;
}
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="fixed top-0 right-0 z-1 m-4 rounded-sm border-3 border-solid border-violet-500 bg-black p-3 text-left text-white shadow-sm"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady"
        >Application prête à fonctionner hors-ligne</span
      >
      <span v-else>
        Nouveau contenu disponible, cliquez sur le bouton « Recharger » pour
        mettre à jour.
      </span>
    </div>
    <BaseButton :onClick="updateServiceWorker">Recharger</BaseButton>
    <BaseButton :onClick="close">Fermer</BaseButton>
  </div>
</template>
