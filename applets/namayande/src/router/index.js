import DashboardRoutes from "@namayande/modules/Dashboard/router";
import ProductsRoutes from "@namayande/modules/Products/router";
import SellRoutes from "@namayande/modules/Sell/router";
import StockRoutes from "@namayande/modules/Stock/router";
import FinancialRoutes from "@namayande/modules/Financial/router";
import BranchsRoutes from "@namayande/modules/Branchs/router";

export const NamayandePanelRoutes = [
  {
    path: "/namayande",
    redirect: "/namayande/home",
    component: () => import("@namayande/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
          disabled: true,
        },
        {
          text: "نماینده",
          disabled: true,
        },
      ],
    },
    children: [
      ...SellRoutes,
      ...FinancialRoutes,
      ...DashboardRoutes,
      ...ProductsRoutes,
      ...StockRoutes,
      ...BranchsRoutes,
    ],
  },
];
