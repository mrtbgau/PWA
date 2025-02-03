import { createRouter, createWebHistory } from "vue-router";

import TheCamera from "../components/camera/TheCamera.vue";
import TheMap from "../components/TheMap.vue";

const routes = [
  { path: "/camera", component: TheCamera },
  { path: "/location", component: TheMap },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
