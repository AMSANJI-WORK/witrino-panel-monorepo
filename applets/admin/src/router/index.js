import UserRoutes from "@packages/admin/users/router";
import RolesRoutes from "@packages/admin/roles/router";
import ThemeRoutes from "@packages/admin/theme/router";
import ServiceRoutes from "@packages/admin/service/router";
import PlansRoutes from "@packages/admin/plan/router";
import UnionsRoutes from "@applets/admin/src/modules/Unions/router";
import BusinessRoutes from "@applets/admin/src/modules/Business/router";
import OperatorRoutes from "@applets/admin/src/modules/Operator/router";
import BranchsRoutes from "@applets/admin/src/modules/Branchs/router";
import FinancialRoutes from "@applets/admin/src/modules/Financial/router";
import ProductsRoutes from "@applets/admin/src/modules/Products/router";
import DashboardRoutes from "@applets/admin/src/modules/Dashboard/router";
import { ProfileRoutes } from "@commen/profile/router";
export const AdminPanelRoutes = [
  {
    path: "/admin",
    redirect: "/admin/home",
    component: () =>
      import("@applets/admin/src/modules/Dashboard/views/index.vue"),
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
      ...FinancialRoutes,
      ...DashboardRoutes,
      ...ProductsRoutes,
      ...BranchsRoutes,
      ...UnionsRoutes,
      ...BusinessRoutes,
      ...OperatorRoutes,
      ...ServiceRoutes,
      ...PlansRoutes,
      ...RolesRoutes,
      ...ThemeRoutes,
      ...UserRoutes,
      ...ProfileRoutes,
    ],
  },
];
