import DashboardRoutes from "@applets/witrino/agent/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const AgentPanelRoutes = [
  {
    path: "/agent",
    redirect: "/agent/home",
    component: () =>
      import("@applets/witrino/agent/modules/dashboard/views/index.vue"),
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
