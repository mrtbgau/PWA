<template>
  <div class="relative">
    <!-- Toggle button when sidebar is closed -->
    <button
      v-if="isCollapsed"
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-50 rounded-lg bg-[#0F0F13] p-2 transition-colors hover:bg-white/10"
    >
      <ChevronsRight class="h-5 w-5 text-white" />
    </button>

    <!-- Sidebar -->
    <nav
      class="h-screen bg-[#0F0F13] text-white transition-all duration-300 ease-in-out"
      :class="[isCollapsed ? 'w-16' : 'w-64']"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <h1
          class="text-xl font-semibold transition-opacity duration-300"
          :class="{ 'opacity-0': isCollapsed }"
        >
          PWA
        </h1>
        <button
          @click="toggleSidebar"
          class="rounded-lg p-2 transition-colors hover:bg-white/10"
        >
          <ChevronsLeft
            :class="{ 'rotate-180': isCollapsed }"
            class="h-5 w-5 transition-transform duration-300"
          />
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="space-y-2 px-3 py-4">
        <!-- Home -->
        <a
          href="#"
          class="flex items-center gap-3 rounded-lg p-3 text-purple-500 transition-colors hover:bg-white/5"
        >
          <Home class="h-5 w-5" />
          <span :class="{ hidden: isCollapsed }">Accueil</span>
        </a>
        <a
          href="/location"
          class="flex items-center gap-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5"
        >
          <MapPin class="h-5 w-5" />
          <span :class="{ hidden: isCollapsed }">Géolocalisation</span>
        </a>
        <a
          href="/camera"
          class="flex items-center gap-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5"
        >
          <Camera class="h-5 w-5" />
          <span :class="{ hidden: isCollapsed }">Caméra</span>
        </a>
        <a
          href="#"
          class="flex items-center gap-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5"
        >
          <Battery class="h-5 w-5" />
          <span :class="{ hidden: isCollapsed }">Infos sur la batterie</span>
        </a>
        <a
          href="#"
          class="flex items-center gap-3 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5"
        >
          <MessagesSquare class="h-5 w-5" />
          <span :class="{ hidden: isCollapsed }">Chat</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import {
  Battery,
  Camera,
  ChevronsLeft,
  ChevronsRight,
  Home,
  MapPin,
  MessagesSquare,
} from "lucide-vue-next";
import { ref } from "vue";

const isCollapsed = ref(false);
const isCreateOpen = ref(false);
const isTodoOpen = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleCreate = () => {
  if (!isCollapsed.value) {
    isCreateOpen.value = !isCreateOpen.value;
  }
};

const toggleTodo = () => {
  if (!isCollapsed.value) {
    isTodoOpen.value = !isTodoOpen.value;
  }
};
</script>
