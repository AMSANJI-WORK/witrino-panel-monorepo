export default [
  {
    path: "sell",
    name: "sell",
    redirect: "sell/list",
    meta: {
      breadCrumb: [
        {
          text: "فروش",
          to: "/namayande/sell",
        },
      ],
    },
    component: () =>
      import("@applets/namayande/src/modules/Sell/views/index.vue"),
    children: [
      {
        path: "list",
        name: "sell-list-page",
        component: () =>
          import("@applets/namayande/src/modules/Sell/views/List.vue"),
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
