import Vue from "vue";
import PublicRoutes from "./public";
import VueRouter from "vue-router";
import { AuthRoutes } from "@applets/auth/src/router";
import { SharedRoutes } from "@shared/router";
import { AdminPanelRoutes } from "@applets/admin/src/router";
import { SupervisorPanelRoutes } from "@applets/supervisor/src/router";
import { NamayandePanelRoutes } from "@applets/namayande/src/router";
import { EdtehadiehPanelRoutes } from "@applets/edtehadieh/src/router";
import { OperatorPanelRoutes } from "@applets/operator/src/router";
import { AgentPanelRoutes } from "@applets/agent/src/router";
import { ProfileRoutes } from "@packages/profile/router";

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
        ...SupervisorPanelRoutes,
        ...OperatorPanelRoutes,
        ...AgentPanelRoutes,
        ...AdminPanelRoutes,
        ...SharedRoutes,
        ...ProfileRoutes,
      ],
    },
  ],
});

export default router;
