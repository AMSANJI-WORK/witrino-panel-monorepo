import DashboardRoutes from "@applets/witrino/syndicate/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const SyndicatePanelRoutes = [
  {
    path: "/syndicate",
    redirect: "/syndicate/home",
    component: () =>
      import("@applets/witrino/syndicate/modules/dashboard/views/index.vue"),
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
