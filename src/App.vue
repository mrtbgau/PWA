<script setup lang="ts">
import SideBar from "./components/Sidebar.vue";
import ReloadPrompt from "./ReloadPrompt.vue";
</script>

<template>
  <ReloadPrompt />
  <main>
    <div class="flex h-screen">
      <SideBar />
      <router-view />
    </div>
  </main>
</template>
