import DashboardRoutes from "@applets/edtehadieh/src/modules/Dashboard/router";
import TradeUnitRoutes from "@applets/edtehadieh/src/modules/TradeUnit/router";
import FinancialRoutes from "@applets/edtehadieh/src/modules/Financial/router";
import ComplaintRoutes from "@applets/edtehadieh/src/modules/Complaint/router";
import InspectorRoutes from "@applets/edtehadieh/src/modules/Inspector/router";
import ArchiveRoutes from "@applets/edtehadieh/src/modules/Archive/router";
import MessagesRoutes from "@applets/edtehadieh/src/modules/Messages/router";
import { ProfileRoutes } from "@commen/profile/router";

export const EdtehadiehPanelRoutes = [
  {
    path: "/edtehadieh",
    redirect: "/edtehadieh/home",
    component: () =>
      import("@applets/edtehadieh/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "اتحادیه",
          to: "/edtehadieh",
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
      ...ProfileRoutes,
    ],
  },
];
