import DashboardRoutes from "@admin/modules/Dashboard/router";
import ProductsRoutes from "@admin/modules/Products/router";
import FinancialRoutes from "@admin/modules/Financial/router";
import BranchsRoutes from "@admin/modules/Branchs/router";
import UserRoutes from "@admin/modules/Users/router";
import RolesRoutes from "@admin/modules/Roles/router";
import UnionsRoutes from "@admin/modules/Unions/router";
import BusinessRoutes from "@admin/modules/Business/router";
import OperatorRoutes from "@admin/modules/Operator/router";
import ServiceRoutes from "@admin/modules/Service/router";
import ThemeRoutes from "@admin/modules/Themes/router";
import PlansRoutes from "@admin/modules/Plans/router";
export const AdminPanelRoutes = [
  {
    path: "/admin",
    redirect: "/admin/home",
    component: () => import("@admin/modules/Dashboard/views/index.vue"),
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
