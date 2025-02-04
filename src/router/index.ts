import { createRouter, createWebHistory } from "vue-router";

import TheCamera from "../components/camera/TheCamera.vue";
import Map from "../views/Map.vue";

const routes = [
  { path: "/location", component: Map },
  { path: "/camera", component: TheCamera },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
