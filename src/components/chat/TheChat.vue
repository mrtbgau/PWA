<template>
  <div class="w-full">
    <h1 class="mb-20 text-center text-2xl font-bold">
      Bienvenue dans le chat, {{ pseudo }}
    </h1>
    <div
      class="mb-4 h-80 overflow-y-scroll rounded-lg bg-gray-100 p-4 shadow-md"
    >
      <div v-for="message in messages" :key="message.dateEmis" class="mb-2">
        <span class="font-bold text-blue-500">{{ message.pseudo }} :</span>
        <span>{{ message.content }}</span>
        <small class="block text-xs text-gray-500">{{
          new Date(message.dateEmis).toLocaleString()
        }}</small>
      </div>
    </div>
    <div class="flex gap-4 p-4">
      <input
        v-model="txtChat"
        type="text"
        placeholder="Tapez votre message..."
        class="w-full rounded-md border-3 border-gray-300 p-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:outline-none"
      />
      <BaseButton @click="sendMessage"><SendHorizontal /></BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SendHorizontal } from "lucide-vue-next";
import io from "socket.io-client";
import { onBeforeUnmount, onMounted, ref } from "vue";
import BaseButton from "../UI/BaseButton.vue";

const props = defineProps<{ pseudo: string }>();

const messages = ref<{ content: string; dateEmis: string; pseudo: string }[]>(
  [],
);
const txtChat = ref("");

const socket = ref<any | null>(null);

onMounted(() => {
  socket.value = io("https://mohammedelmehdi.makhlouk.angers.mds-project.fr", {
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  });

  socket.value.emit("chat-join-room", {
    pseudo: props.pseudo,
    roomId: "general",
  });

  socket.value.on("chat-msg", (data: any) => {
    messages.value.push(data);
  });
});

const sendMessage = () => {
  if (txtChat.value.trim()) {
    socket.value.emit("chat-msg", {
      msg: txtChat.value.trim(),
      roomId: "general",
    });
    txtChat.value = "";
  }
};

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.disconnect();
  }
});
</script>
