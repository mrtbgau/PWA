<script setup lang="ts">
import TheSideBar from "./components/layouts/TheSidebar.vue";
import ReloadPrompt from "./ReloadPrompt.vue";
</script>

<template>
  <ReloadPrompt />
  <main>
    <div class="flex h-screen">
      <TheSideBar />
      <router-view />
    </div>
  </main>
</template>
