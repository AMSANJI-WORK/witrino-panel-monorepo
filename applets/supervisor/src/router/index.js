import DashboardRoutes from "@applets/supervisor/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const SupervisorPanelRoutes = [
  {
    path: "/supervisor",
    redirect: "/supervisor/home",
    component: () => import("@applets/supervisor/src/layouts/Defualt.vue"),
    meta: {
      breadCrumb: [],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
