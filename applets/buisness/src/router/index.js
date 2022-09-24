import DashboardRoutes from "@applets/buisness/modules/dashboard/router";
import { ProfileRoutes } from "@commen/profile/router";

export const BusinessPanelRoutes = [
  {
    path: "/business",
    redirect: "/business/home",
    component: () => import("../../modules/dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "کسب و کار",
          to: "/business",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
