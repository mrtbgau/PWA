<script setup lang="ts">
import TheSideBar from "./components/layouts/TheSidebar.vue";
import ReloadPrompt from "./ReloadPrompt.vue";
</script>

<template>
  <ReloadPrompt />
  <main>
    <div class="flex h-screen items-center">
      <TheSideBar />
      <div class="flex flex-1 items-center justify-center overflow-y-auto">
        <router-view />
      </div>
    </div>
  </main>
</template>
