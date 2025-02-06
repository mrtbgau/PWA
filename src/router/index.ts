import { createRouter, createWebHistory } from "vue-router";

import { Camera, Images, MapPin, Phone } from "lucide-vue-next";
import Call from "../components/Call.vue";
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
  {
    path: "/phone-call",
    component: Call,
    meta: { label: "Appel", icon: Phone },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
