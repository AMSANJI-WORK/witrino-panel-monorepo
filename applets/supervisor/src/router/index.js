import DashboardRoutes from "@applets/supervisor/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const SupervisorPanelRoutes = [
  {
    path: "/supervisor",
    redirect: "/supervisor/home",
    component: () => import("@applets/supervisor/src/layouts/Defualt.vue"),
    breadCrumb: [
      {
        text: "ویترینو",
        to: "/",
      },
      {
        text: "سوپروایزر",
        to: "/supervisor/home",
      },
    ],
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
