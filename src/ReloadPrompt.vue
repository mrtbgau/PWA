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
    class="fixed right-0 bottom-0 m-4 p-3 border border-solid border-gray-600 rounded-sm z-1 text-left shadow-sm bg-white"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button
      class="border border-solid border-gray-600 outline-none mr-1 rounded-xs py-1 px-2.5"
      v-if="needRefresh"
      @click="updateServiceWorker()"
    >
      Reload
    </button>
    <button
      class="border border-solid border-gray-600 outline-none mr-1 rounded-xs py-1 px-2.5"
      @click="close"
    >
      Close
    </button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
