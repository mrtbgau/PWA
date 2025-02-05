import { createRouter, createWebHistory } from "vue-router";

import { Camera, MapPin } from "lucide-vue-next";
import TheCamera from "../components/camera/TheCamera.vue";
import Map from "../views/Map.vue";

const routes = [
  {
    path: "/location",
    component: Map,
    meta: { label: "Géolocalisation", icon: MapPin },
  },
  {
    path: "/camera",
    component: TheCamera,
    meta: { label: "Caméra", icon: Camera },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
