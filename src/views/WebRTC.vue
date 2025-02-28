<template>
  <div class="mx-auto max-w-4xl p-6">
    <h1 class="mb-6 text-2xl font-bold">
      Application de Visioconférence WebRTC
    </h1>

    <VideoDisplay ref="videoDisplayRef" />

    <CallControls
      :callState="callState"
      @start-webcam="handleStartWebcam"
      @create-call="handleCreateCall"
      @hangup="handleHangup"
    />

    <JoinCall
      v-model:callId="callState.callId"
      :webcamStarted="callState.webcamStarted"
      @join-call="handleJoinCall"
    />

    <div
      v-if="callState.callId && callState.callCreated"
      class="mt-4 rounded-lg bg-gray-100 p-4"
    >
      <p class="text-sm text-gray-700">ID d'appel (à partager) :</p>
      <p class="font-mono text-base select-all">{{ callState.callId }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import CallControls from "../components/webRTC/CallControls.vue";
import JoinCall from "../components/webRTC/JoinCall.vue";
import VideoDisplay from "../components/webRTC/VideoDisplay.vue";
import { webRTCService } from "../services/webRTCService";
import type { CallState } from "../types";

// Refs to access child component methods
const videoDisplayRef = ref<InstanceType<typeof VideoDisplay> | null>(null);

// Reactive state for call
const callState = reactive<CallState>({
  webcamStarted: false,
  callCreated: false,
  callId: "",
});

// Event handlers
const handleStartWebcam = async () => {
  if (!videoDisplayRef.value) return;

  const webcamVideoEl = videoDisplayRef.value?.webcamVideo;
  const remoteVideoEl = videoDisplayRef.value?.remoteVideo;

  if (webcamVideoEl && remoteVideoEl) {
    await webRTCService.startWebcam(webcamVideoEl, remoteVideoEl);
    callState.webcamStarted = true;
  }
};

const handleCreateCall = async () => {
  try {
    const id = await webRTCService.createCall();
    callState.callId = id;
    callState.callCreated = true;
  } catch (error) {
    console.error("Error creating call:", error);
  }
};

const handleJoinCall = async () => {
  try {
    await webRTCService.answerCall(callState.callId);
    callState.callCreated = true;
  } catch (error) {
    console.error("Error joining call:", error);
  }
};

const handleHangup = () => {
  webRTCService.hangup();
  callState.webcamStarted = false;
  callState.callCreated = false;
  callState.callId = "";
};
</script>
