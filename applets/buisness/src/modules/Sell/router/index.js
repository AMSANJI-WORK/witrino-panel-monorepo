export default [
  {
    path: "sell",
    name: "sell",
    redirect: "sell/list",
    meta: {
      breadCrumb: [
        {
          text: "فروش",
          to: "/business/sell",
        },
      ],
    },
    component: () =>
      import("@applets/business/src/modules/Sell/views/index.vue"),
    children: [
      {
        path: "list",
        name: "sell-list-page",
        component: () =>
          import("@applets/business/src/modules/Sell/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست فروش",
            },
          ],
        },
      },
    ],
  },
];
