import DashboardRoutes from "@edtehadieh/modules/Dashboard/router";
import TradeUnitRoutes from "@edtehadieh/modules/TradeUnit/router";
import FinancialRoutes from "@edtehadieh/modules/Financial/router";
import ComplaintRoutes from "@edtehadieh/modules/Complaint/router";
import InspectorRoutes from "@edtehadieh/modules/Inspector/router";
import ArchiveRoutes from "@edtehadieh/modules/Archive/router";
import MessagesRoutes from "@edtehadieh/modules/Messages/router";

export const EdtehadiehPanelRoutes = [
  {
    path: "/edtehadieh",
    redirect: "/edtehadieh/home",
    component: () => import("@edtehadieh/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "اتحادیه",
          disabled: true,
        },
      ],
    },
    children: [
      ...DashboardRoutes,
      ...TradeUnitRoutes,
      ...FinancialRoutes,
      ...ComplaintRoutes,
      ...InspectorRoutes,
      ...ArchiveRoutes,
      ...MessagesRoutes,
    ],
  },
];
