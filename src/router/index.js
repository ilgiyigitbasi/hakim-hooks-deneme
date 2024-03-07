import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/Reports.vue"),
  },
  {
    path: "/reportDetail",
    name: "reportDetail",
    component: () => import("../views/ReportDetail.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/vehicleHistory",
    name: "vehicleHistory",
    component: () => import("../views/VehicleHistory.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
