<template>
  <div class="mt-6">
    <p class="mb-2 text-gray-700">
      Rejoignez la call depuis une nouvelle fenêtre google
    </p>
    <div class="flex items-center">
      <input
        v-model="localCallId"
        class="mr-2 w-96 rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Entrez l'ID de l'appel"
      />
      <BaseButton @click="joinCall" :disabled="!enableJoin">
        Rejoindre
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BaseButton from "../UI/BaseButton.vue";

const props = defineProps<{
  callId: string;
  webcamStarted: boolean;
}>();

const emit = defineEmits<{
  "update:callId": [string];
  "join-call": [];
}>();

const localCallId = ref(props.callId);

watch(
  () => props.callId,
  (newValue) => {
    localCallId.value = newValue;
  },
);

watch(localCallId, (newValue) => {
  emit("update:callId", newValue);
});

const enableJoin = computed(() => {
  return props.webcamStarted && localCallId.value.trim() !== "";
});

const joinCall = () => {
  emit("join-call");
};
</script>
