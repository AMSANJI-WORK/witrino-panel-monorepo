import DashboardRoutes from "@applets/namayande/src/modules/Dashboard/router";
import ProductsRoutes from "@applets/namayande/src/modules/Products/router";
import SellRoutes from "@applets/namayande/src/modules/Sell/router";
import StockRoutes from "@applets/namayande/src/modules/Stock/router";
import FinancialRoutes from "@applets/namayande/src/modules/Financial/router";
import BranchsRoutes from "@applets/namayande/src/modules/Branchs/router";

export const NamayandePanelRoutes = [
  {
    path: "/namayande",
    redirect: "/namayande/home",
    component: () => import("@applets/namayande/src/modules/Dashboard/views/index.vue"),
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
