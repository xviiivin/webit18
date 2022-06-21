import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Na1",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Na2",

    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/www",
    name: "Na3",
    component: () => import("../views/HobBy.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
