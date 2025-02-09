<template>
  <TheChatLogin v-if="!isUserLoggedIn" @login="handleLogin" />
  <TheChat v-else :pseudo="pseudo" @logout="handleLogout" />
</template>

<script setup lang="ts">
import TheChat from "../components/chat/TheChat.vue";
import TheChatLogin from "../components/chat/TheChatLogin.vue";

import { ref } from "vue";

const isUserLoggedIn = ref(false);
const pseudo = ref("");

const handleLogin = (handlePseudo: string) => {
  pseudo.value = handlePseudo;
  isUserLoggedIn.value = true;
};

const handleLogout = () => {
  pseudo.value = "";
  isUserLoggedIn.value = false;
};
</script>
