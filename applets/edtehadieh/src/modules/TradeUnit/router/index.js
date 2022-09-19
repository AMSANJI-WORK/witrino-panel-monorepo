export default [
  {
    path: "tradeunit",
    name: "tradeunit",
    redirect: "tradeunit/list",
    component: () =>
      import("@applets/edtehadieh/src/modules/TradeUnit/views/index.vue"),
    children: [
      {
        path: "list",
        name: "tradeunit-list-page",
        component: () =>
          import("@applets/edtehadieh/src/modules/TradeUnit/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "واحد های صنفی",
              to: "/edtehadieh/tradeunit/list",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "tradeunit-detail-page",
        component: () =>
          import("@applets/edtehadieh/src/modules/TradeUnit/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "جزئیات واحد صنفی",
            },
          ],
        },
      },
    ],
  },
];
