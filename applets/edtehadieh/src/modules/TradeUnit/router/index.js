export default [
  {
    path: "/edtehadieh/tradeunit",
    name: "tradeunit",
    redirect: "/edtehadieh/tradeunit/list",
    component: () => import("@applets/edtehadieh/src/modules/TradeUnit/views/index.vue"),
    children: [
      {
        path: "list",
        name: "tradeunit-list-page",
        component: () => import("@applets/edtehadieh/src/modules/TradeUnit/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "واحد های صنفی",
              to: "/edtehadieh/tradeunit/list",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "tradeunit-detail-page",
        component: () => import("@applets/edtehadieh/src/modules/TradeUnit/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "واحد های صنفی",
              to: "/edtehadieh/tradeunit/list",
            },
            {
              text: "جزئیات واحد صنفی",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
