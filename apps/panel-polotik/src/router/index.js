import Vue from "vue";
import VueRouter from "vue-router";
import ScrollMiddleware from "@polotik/middlewares/scroll";
import store from "@polotik/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/logout",
      name: "logout",
      component: () => import("@packages/polotik/home/views/Logout.vue"),
      beforeEnter: (to, from, next) => {
        store.commit(`auth/LOGOUT`);
        window.location.href = "https://witrino.com/user";
        next();
      },
    },
    {
      path: "/",
      name: "root",
      redirect: "/home",
      component: () => import("@packages/polotik/Home/Views/Dashboard.vue"),
      meta: {
        breadCrumb: [
          {
            text: "خانه",
          },
        ],
      },
    },
  ],
});
router.afterEach(ScrollMiddleware);
export default router;
