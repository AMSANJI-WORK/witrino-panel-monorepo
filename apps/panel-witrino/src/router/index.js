import Vue from "vue";
import PublicRoutes from "./public";
import VueRouter from "vue-router";
import { AdminPanelRoutes } from "@applets/witrino/admin/src/router";
import { AuthRoutes } from "@applets/witrino/auth/src/router";
import { SupervisorPanelRoutes } from "@applets/witrino/supervisor/src/router";
import { BuisnessPanelRoutes } from "@applets/witrino/buisness/src/router";
import { SyndicatePanelRoutes } from "@applets/witrino/syndicate/src/router";
import { OperatorPanelRoutes } from "@applets/witrino/operator/src/router";
import { AgentPanelRoutes } from "@applets/witrino/agent/src/router";
import { UserPanelRoutes } from "@applets/witrino/user/src/router/index";
import { InspectorPanelRoutes } from "@applets/witrino/inspector/src/router/index";

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
  ],
});

export default router;
