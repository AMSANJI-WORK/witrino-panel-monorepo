import DashboardRoutes from "@applets/witrino/user/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";

export const UserPanelRoutes = [
  {
    path: "/user",
    redirect: "/user/home",
    component: () => import("@applets/witrino/user/src/layouts/Defualt.vue"),
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
