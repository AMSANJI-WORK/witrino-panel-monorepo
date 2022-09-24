import DashboardRoutes from "@applets/syndicate/src/modules/Dashboard/router";
import TradeUnitRoutes from "@applets/syndicate/src/modules/TradeUnit/router";
import FinancialRoutes from "@applets/syndicate/src/modules/Financial/router";
import ComplaintRoutes from "@applets/syndicate/src/modules/Complaint/router";
import InspectorRoutes from "@applets/syndicate/src/modules/Inspector/router";
import ArchiveRoutes from "@applets/syndicate/src/modules/Archive/router";
import MessagesRoutes from "@applets/syndicate/src/modules/Messages/router";
import { ProfileRoutes } from "@commen/profile/router";

export const syndicatePanelRoutes = [
  {
    path: "/syndicate",
    redirect: "/syndicate/home",
    component: () =>
      import("@applets/syndicate/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "اتحادیه",
          to: "/syndicate",
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
