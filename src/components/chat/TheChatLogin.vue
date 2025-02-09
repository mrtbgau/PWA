<template>
  <div class="flex flex-col items-center gap-4">
    <label for="pseudoInput" class="mb-2 text-2xl font-bold text-gray-700">
      Entrez un pseudo pour se connecter au chat :
    </label>
    <input
      v-model="pseudoInput"
      type="text"
      class="rounded-md border-3 border-gray-300 p-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:outline-none"
    />
    <BaseButton @click="login">Se connecter</BaseButton>
  </div>
</template>

<script setup lang="ts">
import io from "socket.io-client";
import { ref } from "vue";
import BaseButton from "../UI/BaseButton.vue";

const pseudoInput = ref("");
const emit = defineEmits(["login"]);
const socket = ref<any | null>(null);

const login = () => {
  if (pseudoInput.value.trim()) {
    socket.value = io(
      "https://mohammedelmehdi.makhlouk.angers.mds-project.fr",
      {
        transports: ["websocket"],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
      },
    );

    socket.value.on("connect", () => {
      socket.value.emit("chat-join-room", {
        pseudo: pseudoInput.value.trim(),
        roomId: "general",
      });
    });

    emit("login", pseudoInput.value.trim());
  } else {
    alert("Veuillez entrer un pseudo pour vous connecter au chat.");
  }
};
</script>
