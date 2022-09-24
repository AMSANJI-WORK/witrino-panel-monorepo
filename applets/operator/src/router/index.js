import DashboardRoutes from "@applets/operator/src/modules/Dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const OperatorPanelRoutes = [
  {
    path: "/operator",
    redirect: "/operator/home",
    component: () =>
      import("@applets/operator/src/modules/Dashboard/views/index.vue"),
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
