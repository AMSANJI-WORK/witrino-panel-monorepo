import DashboardRoutes from "@applets/admin/src/modules/Dashboard/router";
import ProductsRoutes from "@applets/admin/src/modules/Products/router";
import FinancialRoutes from "@applets/admin/src/modules/Financial/router";
import BranchsRoutes from "@applets/admin/src/modules/Branchs/router";
import UserRoutes from "@packages/admin/users/router";
import RolesRoutes from "@packages/admin/roles/router";
import UnionsRoutes from "@applets/admin/src/modules/Unions/router";
import BusinessRoutes from "@applets/admin/src/modules/Business/router";
import OperatorRoutes from "@applets/admin/src/modules/Operator/router";
import ServiceRoutes from "@applets/admin/src/modules/Service/router";
import ThemeRoutes from "@applets/admin/src/modules/Themes/router";
import PlansRoutes from "@applets/admin/src/modules/Plans/router";
export const AdminPanelRoutes = [
  {
    path: "/admin",
    redirect: "/admin/home",
    component: () => import("@applets/admin/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/admin/home",
        },
        {
          text: "ادمین",
          disabled: true,
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
    ],
  },
];
