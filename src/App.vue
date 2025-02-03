<script setup lang="ts">
import TheCamera from "./components/camera/TheCamera.vue";
import SideBar from "./components/Sidebar.vue";
import TheMap from "./components/TheMap.vue";
import ReloadPrompt from "./ReloadPrompt.vue";
</script>

<template>
  <ReloadPrompt />
  <!-- <TheSideBar /> -->
  <!-- <TheCamera /> -->
  <TheMap />
  <SideBar />
</template>
