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
    class="fixed right-0 bottom-0 z-1 m-4 rounded-sm border border-solid border-gray-600 bg-white p-3 text-left shadow-sm"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button
      class="mr-1 rounded-xs border border-solid border-gray-600 px-2.5 py-1 outline-none"
      v-if="needRefresh"
      @click="updateServiceWorker()"
    >
      Reload
    </button>
    <button
      class="mr-1 rounded-xs border border-solid border-gray-600 px-2.5 py-1 outline-none"
      @click="close"
    >
      Close
    </button>
  </div>
</template>
