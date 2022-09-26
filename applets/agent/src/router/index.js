import DashboardRoutes from "@applets/agent/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const AgentPanelRoutes = [
  {
    path: "/agent",
    redirect: "/agent/home",
    component: () =>
      import("@applets/agent/modules/dashboard/views/index.vue"),
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
