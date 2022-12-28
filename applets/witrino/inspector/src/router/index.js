import DashboardRoutes from "@applets/witrino/inspector/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const InspectorPanelRoutes = [
  {
    path: "/inspector",
    redirect: "/inspector/home",
    component: () => import("@applets/witrino/inspector/src/layouts/Defualt.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "بازرس",
          to: "/inspector/home",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
