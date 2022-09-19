import DashboardRoutes from "@applets/namayande/src/modules/Dashboard/router";
import { ProfileRoutes } from "@commen/profile/router";

export const NamayandePanelRoutes = [
  {
    path: "/namayande",
    redirect: "/namayande/home",
    component: () =>
      import("@applets/namayande/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "نماینده",
          to: "/namayande",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
