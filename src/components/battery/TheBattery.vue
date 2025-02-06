<template>
  <div
    class="relative flex h-12 w-24 items-center justify-start rounded-md border-4 border-violet-500 bg-transparent"
  >
    <div
      class="flex h-full items-center justify-center transition-all duration-500 ease-out"
      :class="{
        'bg-green-700': level > 0.15,
        'bg-red-700': level <= 0.15,
      }"
      :style="{ width: `${level * 100}%` }"
    >
      <div class="flex items-center justify-center space-x-2">
        <Zap v-if="charging" class="h-10 w-10 text-yellow-400" />
      </div>
    </div>
    <div
      class="absolute top-1/4 right-[-15px] h-1/2 w-2.5 rounded-sm bg-violet-500"
    ></div>
    <p
      class="absolute top-[100%] left-[50%] -translate-x-1/2 text-base font-bold"
    >
      {{ Math.round(level * 100) }}%
    </p>
  </div>
</template>

<script setup>
import { useBattery } from "@vueuse/core";
import { Zap } from "lucide-vue-next";
import { computed } from "vue";

const { level, charging } = useBattery();

const batteryColor = computed(() => {
  return level.value > 0.15 ? "green" : "red";
});
</script>
