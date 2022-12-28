import DashboardRoutes from "@applets/witrino/buisness/modules/dashboard/router";
import ProductRoutes from "@applets/witrino/buisness/modules/product/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const BuisnessPanelRoutes = [
  {
    path: "/buisness",
    redirect: "/buisness/home",
    component: () => import("../../modules/dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "کسب و کار",
          to: "/buisness",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes, ...ProductRoutes],
  },
];
