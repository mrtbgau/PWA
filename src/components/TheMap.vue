<template>
  <div class="relative h-screen w-full">
    <div class="absolute h-full w-full" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { Map, MapStyle, config } from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { markRaw, onMounted, onUnmounted, shallowRef } from "vue";

const mapContainer = shallowRef<HTMLElement | null>(null);
const map = shallowRef<Map | null>(null);

onMounted(() => {
  config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;
  console.log(config.apiKey);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const initialState = { lng: longitude, lat: latitude, zoom: 14 };

      if (mapContainer.value) {
        map.value = markRaw(
          new Map({
            container: mapContainer.value,
            style: MapStyle.STREETS,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom,
          }),
        );
      }
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

onUnmounted(() => {
  map.value?.remove();
});
</script>
