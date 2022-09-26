export default [
  {
    path: "sell",
    name: "sell",
    redirect: "sell/list",
    meta: {
      breadCrumb: [
        {
          text: "فروش",
          to: "/buisness/sell",
        },
      ],
    },
    component: () =>
      import("@applets/buisness/src/modules/Sell/views/index.vue"),
    children: [
      {
        path: "list",
        name: "sell-list-page",
        component: () =>
          import("@applets/buisness/src/modules/Sell/views/List.vue"),
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
