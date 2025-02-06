<template>
  <nav
    class="flex h-screen flex-col bg-black text-white transition-all duration-300 ease-in-out"
    :class="[isCollapsed ? 'w-16' : 'w-64']"
  >
    <div class="flex items-center p-4">
      <h1
        class="mr-auto text-xl font-semibold transition-opacity duration-300"
        :class="{ 'w-0 overflow-hidden opacity-0': isCollapsed }"
      >
        PWA
      </h1>

      <BaseButton :onClick="toggleSidebar" inverted>
        <ChevronsLeft
          :class="{ 'rotate-180': isCollapsed }"
          class="h-5 w-5 transition-transform duration-300"
      /></BaseButton>
    </div>

    <div class="flex-grow space-y-2 px-3 py-4">
      <BaseNavLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        :icon="route.meta.icon"
        :label="route.meta.label"
        :is-collapsed="isCollapsed"
      />
    </div>
    <div class="absolute bottom-5 left-0">
      <TheBattery v-if="!isCollapsed" />
    </div>
  </nav>
</template>

<script setup>
import {
  Camera,
  ChevronsLeft,
  Home,
  MapPin,
  MessagesSquare,
} from "lucide-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "../UI/BaseButton.vue";
import BaseNavLink from "../UI/BaseNavLink.vue";
import TheBattery from "../battery/TheBattery.vue";

const isCollapsed = ref(false);
const isCreateOpen = ref(false);
const isTodoOpen = ref(false);

const routes = useRouter().options.routes;

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>
