import DashboardRoutes from "@applets/user/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const UserPanelRoutes = [
  {
    path: "/user",
    redirect: "/user/home",
    component: () => import("@applets/user/src/layouts/Defualt.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "کاربر",
          to: "/user/home",
        },
      ],
    },
    children: [...DashboardRoutes, ...ProfileRoutes],
  },
];
