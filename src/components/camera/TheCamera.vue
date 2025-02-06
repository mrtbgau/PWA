<template>
  <div>
    <video ref="videoElement" autoplay muted playsinline></video>
    <button @click="takePhoto">Prendre une photo</button>
    <canvas ref="canvasElement" style="display: none"></canvas>
    <img v-if="photoData" :src="photoData" alt="Captured photo" />
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { onMounted, ref } from "vue";

const videoElement = ref<HTMLVideoElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const photoData = ref<string | null>(null);
const errorMessage = ref<string | null>(null);

const photoList = useStorage<string[]>("photo-list", []);

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

const drawCanvas = (canvas: HTMLCanvasElement, img: HTMLVideoElement) => {
  const context = canvas.getContext("2d");
  if (context) {
    canvas.width = img.videoWidth;
    canvas.height = img.videoHeight;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
};

const takePhoto = () => {
  if (videoElement.value && canvasElement.value) {
    drawCanvas(canvasElement.value, videoElement.value);
    photoData.value = canvasElement.value.toDataURL("image/png");
    photoList.value = [...photoList.value, photoData.value];
  }
};

onMounted(() => {
  setupMediaStream();
});
</script>
