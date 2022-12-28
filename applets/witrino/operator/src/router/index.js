import DashboardRoutes from "@applets/witrino/operator/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const OperatorPanelRoutes = [
  {
    path: "/operator",
    redirect: "/operator/home",
    component: () =>
      import("@applets/witrino/operator/modules/dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "اپراتور",
          to: "/operator/home",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
