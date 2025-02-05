<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";

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
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        Nouveau contenu disponible, cliquez sur le bouton « Recharger » pour
        mettre à jour.
      </span>
    </div>
    <button
      class="mr-1 rounded-xs border-3 border-solid border-violet-500 px-2.5 py-1 outline-none"
      v-if="needRefresh"
      @click="updateServiceWorker()"
    >
      Recharger
    </button>
    <button
      class="mr-1 rounded-xs border-3 border-solid border-violet-500 px-2.5 py-1 outline-none"
      @click="close"
    >
      Fermer
    </button>
  </div>
</template>
