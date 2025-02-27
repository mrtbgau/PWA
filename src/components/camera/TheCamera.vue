<template>
  <div class="flex flex-col items-center gap-4">
    <video
      class="rounded-3xl"
      ref="videoElement"
      autoplay
      muted
      playsinline
    ></video>
    <BaseButton @click="takePhoto">Prendre une photo</BaseButton>
    <canvas ref="canvasElement" hidden></canvas>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useStorage, useWebNotification } from "@vueuse/core";
import { onMounted, ref } from "vue";
import BaseButton from "../UI/BaseButton.vue";

const videoElement = ref<HTMLVideoElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const photoData = ref<string | null>(null);
const errorMessage = ref<string | null>(null);

const photoList = useStorage<string[]>("photo-list", []);

const { isSupported, show } = useWebNotification();

const getMediaStream = async (): Promise<MediaStream> => {
  return await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
};

const setupMediaStream = async () => {
  try {
    const stream = await getMediaStream();
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
    }
  } catch (error) {
    errorMessage.value = "Impossible d'accéder à la caméra";
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
    if (isSupported) {
      show({
        title: "Photo Capturée 📸",
        body: "Une nouvelle photo a été ajoutée à votre galerie.",
        icon: photoData.value,
      });
      navigator.vibrate(200);
    } else {
      console.warn(
        "Les notifications web ne sont pas supportées par ce navigateur.",
      );
    }
  }
};

onMounted(() => {
  setupMediaStream();
});
</script>
