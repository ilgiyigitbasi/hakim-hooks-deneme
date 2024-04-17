import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";

const routes = [
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
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/error",
    name: "error",
    component: () => import("../components/ErrorScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    // Eğer kimlik doğrulanmamışsa ve hedef rotası giriş yapma sayfası değilse, giriş sayfasına yönlendir.
    if (to.name !== "login") {
      next({ name: "login" });
    } else {
      next(); // Giriş sayfasına zaten yönlendiriliyorsa, devam et.
    }
  } else {
    // Kimlik doğrulanmışsa, hedef rotaya yönlendir.
    next();
  }
});
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
