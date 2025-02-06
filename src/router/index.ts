import { createRouter, createWebHistory } from "vue-router";

import { Camera, Images, MapPin } from "lucide-vue-next";
import TheCamera from "../components/camera/TheCamera.vue";
import TheGallery from "../components/camera/TheGallery.vue";
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
  {
    path: "/gallery",
    component: TheGallery,
    meta: { label: "Galerie", icon: Images },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
