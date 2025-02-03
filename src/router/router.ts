import { createRouter, createWebHistory } from "vue-router";

import AboutView from "./AboutView.vue";
import HomeView from "./HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
