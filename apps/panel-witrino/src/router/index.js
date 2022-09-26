import Vue from "vue";
import PublicRoutes from "./public";
import VueRouter from "vue-router";
import { SharedRoutes } from "@shared/router";
import { AdminPanelRoutes } from "@applets/admin/src/router";
import { AuthRoutes } from "@applets/auth/src/router";
import { SupervisorPanelRoutes } from "@applets/supervisor/src/router";
import { BuisnessPanelRoutes } from "@applets/buisness/src/router";
import { SyndicatePanelRoutes } from "@applets/syndicate/src/router";
import { OperatorPanelRoutes } from "@applets/operator/src/router";
import { AgentPanelRoutes } from "@applets/agent/src/router";
import { UserPanelRoutes } from "@applets/user/src/router/index";
import { InspectorPanelRoutes } from "@applets/inspector/src/router/index";

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
        breadCrumb: [],
      },
    },
    ...UserPanelRoutes,
    ...InspectorPanelRoutes,
    ...AdminPanelRoutes,
    ...BuisnessPanelRoutes,
    ...SyndicatePanelRoutes,
    ...SupervisorPanelRoutes,
    ...OperatorPanelRoutes,
    ...AgentPanelRoutes,
    ...SharedRoutes,
  ],
});

export default router;
