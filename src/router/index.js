import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/projets",
      redirect: "/404",
    },

    {
      path: "/contact",
      redirect: "/404",
    },

    {
      path: "/404",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },

    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
});

export default router;
