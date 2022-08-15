import Vue from "vue";
import PublicRoutes from "./public";
import VueRouter from "vue-router";
import { AuthRoutes } from "@applets/auth/src/router";
import { SharedRoutes } from "@shared/router";
import { AdminPanelRoutes } from "@applets/admin/src/router";
import { NamayandePanelRoutes } from "@applets/namayande/src/router";
import { EdtehadiehPanelRoutes } from "@applets/edtehadieh/src/router";
import { ProfileRoutes } from "@packages/profile/router/index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    ...PublicRoutes,
    ...AuthRoutes,
    {
      path: "/",
      redirect: "/admin",
      component: () => import("@witrino/App.vue"),
      meta: {
        breadCrumb: [
          {
            text: "ویترینو",
            to: "/",
          },
        ],
      },
      children: [
        ...NamayandePanelRoutes,
        ...EdtehadiehPanelRoutes,
        ...AdminPanelRoutes,
        ...SharedRoutes,
        ...ProfileRoutes,
      ],
    },
  ],
});

export default router;
