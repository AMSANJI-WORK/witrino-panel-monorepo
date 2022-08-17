import Vue from "vue";
import VueRouter from "vue-router";
import DashboardRoutes from "./dashboard";
import AuthRoutes from "@polotik/modules/Auth/router";
import ScrollMiddleware from "@polotik/middlewares/scroll";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    ...AuthRoutes,
    {
      path: "/",
      name: "root",
      redirect: "/home",
      component: () => import("@polotik/modules/Home/Views/Dashboard.vue"),
      meta: {
        breadCrumb: [
          {
            text: "خانه",
          },
        ],
      },
      children: [...DashboardRoutes],
    },
  ],
});
router.afterEach(ScrollMiddleware);
export default router;