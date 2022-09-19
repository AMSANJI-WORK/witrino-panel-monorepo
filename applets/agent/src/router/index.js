import DashboardRoutes from "@applets/agent/src/modules/Dashboard/router";
import { ProfileRoutes } from "@commen/profile/router";

export const AgentPanelRoutes = [
  {
    path: "/agent",
    redirect: "/agent/home",
    component: () =>
      import("@applets/agent/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
