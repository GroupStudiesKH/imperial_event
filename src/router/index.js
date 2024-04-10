import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/discovery",
      name: "discovery",
      component: () => import("../views/DiscoveryView.vue"),
    },
    {
      path: "/discovery/detail/:id",
      name: "discovery-detail",
      component: () => import("../views/DiscoveryDetail.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
    },
  ],
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

export default router;
