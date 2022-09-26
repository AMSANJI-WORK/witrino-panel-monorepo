import DashboardRoutes from "@applets/syndicate/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const syndicatePanelRoutes = [
  {
    path: "/syndicate",
    redirect: "/syndicate/home",
    component: () =>
      import("@applets/syndicate/modules/dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "اتحادیه",
          to: "/syndicate",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
