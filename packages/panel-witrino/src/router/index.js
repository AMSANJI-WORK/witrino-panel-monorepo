import Vue from "vue";
import PublicRoutes from "./public";
import VueRouter from "vue-router";
import { AuthRoutes } from "@auth/router";
import { SharedRoutes } from "@shared/router";
import { AdminPanelRoutes } from "@admin/router";
import { NamayandePanelRoutes } from "@namayande/router";
import { EdtehadiehPanelRoutes } from "@edtehadieh/router";
import ProfileRoutes from "@shared/modules/Profile/router";

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
