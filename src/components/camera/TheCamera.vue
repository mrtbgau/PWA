<template>
  <div>
    <video ref="videoElement" autoplay muted playsinline></video>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const videoElement = ref<HTMLVideoElement | null>(null);
const errorMessage = ref<string | null>(null);

const getMediaStream = async (): Promise<MediaStream> => {
  return await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
};

const setupMediaStream = async () => {
  try {
    const stream = await getMediaStream();
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
    }
  } catch (error) {
    errorMessage.value = "Impossible d'accéder à la caméra ou au micro.";
    console.error("Erreur lors de l'accès au flux média :", error);
  }
};

onMounted(() => {
  setupMediaStream();
});
</script>
