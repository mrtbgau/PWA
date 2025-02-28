<template>
  <div class="flex justify-between space-x-4">
    <div class="w-1/2">
      <h3 class="mb-2 text-lg font-medium">Local</h3>
      <video
        ref="webcamVideo"
        autoplay
        playsinline
        class="w-full rounded-lg bg-gray-200"
      ></video>
    </div>
    <div class="w-1/2">
      <h3 class="mb-2 text-lg font-medium">Remote</h3>
      <video
        ref="remoteVideo"
        autoplay
        playsinline
        class="w-full rounded-lg bg-gray-200"
      ></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const webcamVideo = ref<HTMLVideoElement | null>(null);
const remoteVideo = ref<HTMLVideoElement | null>(null);

defineExpose({ webcamVideo, remoteVideo });
</script>
