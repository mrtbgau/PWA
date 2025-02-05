<template>
  <router-link
    :to="to"
    :class="[
      'flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/15',
      $route.path === to ? 'text-violet-500' : 'text-white',
    ]"
  >
    <component :is="icon" class="h-5 w-5" />
    <span :class="{ hidden: isCollapsed }">{{ label }}</span>
  </router-link>
</template>

<script setup lang="ts">
import type { LucideProps } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

defineProps({
  icon: {
    type: Object as () => FunctionalComponent<LucideProps>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});
</script>
