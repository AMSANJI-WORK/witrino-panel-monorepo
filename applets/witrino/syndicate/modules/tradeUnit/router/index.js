export default [
  {
    path: "tradeunit",
    name: "tradeunit",
    redirect: "tradeunit/list",
    meta: {
      breadCrumb: [
        {
          text: "واحد های صنفی",
          to: "/syndicate/tradeunit",
        },
      ],
    },
    component: () =>
      import("@applets/witrino/syndicate/modules/tradeUnit/views/index.vue"),
    children: [
      {
        path: "list",
        name: "tradeunit-list-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/tradeUnit/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست واحد های صنفی",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "tradeunit-detail-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/tradeUnit/views/Preview.vue"),
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
