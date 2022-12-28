import UserRoutes from "@applets/witrino/admin/modules/users/router";
import RolesRoutes from "@applets/witrino/admin/modules/roles/router";
import ThemeRoutes from "@applets/witrino/admin/modules/theme/router";
import PlansRoutes from "@applets/witrino/admin/modules/plan/router";
import DashboardRoutes from "@applets/witrino/admin/modules/dashboard/router";
import { ProfileRoutes } from "@applets/commen/profile/router";
export const AdminPanelRoutes = [
  {
    path: "/admin",
    redirect: "/admin/home",
    component: () =>
      import("@applets/witrino/admin/modules/dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "ادمین",
          to: "/admin",
        },
      ],
    },
    children: [
      ...DashboardRoutes,
      ...PlansRoutes,
      ...RolesRoutes,
      ...ThemeRoutes,
      ...UserRoutes,
      ...ProfileRoutes,
    ],
  },
];
