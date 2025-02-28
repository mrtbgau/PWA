<template>
  <div class="mt-4 space-y-4">
    <div class="flex space-x-2">
      <BaseButton @click="startWebcam" :disabled="callState.webcamStarted">
        Lancer la caméra
      </BaseButton>

      <BaseButton
        @click="createCall"
        :disabled="!callState.webcamStarted || callState.callCreated"
      >
        Lancer le call
      </BaseButton>

      <BaseButton @click="hangup" :disabled="!callState.callCreated">
        Raccrocher
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CallState } from "../../types";
import BaseButton from "../UI/BaseButton.vue";

defineProps<{
  callState: CallState;
}>();

const emit = defineEmits<{
  "start-webcam": [];
  "create-call": [];
  hangup: [];
}>();

const startWebcam = () => {
  emit("start-webcam");
};

const createCall = () => {
  emit("create-call");
};

const hangup = () => {
  emit("hangup");
};
</script>
