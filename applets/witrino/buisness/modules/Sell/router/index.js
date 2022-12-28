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
      import("@applets/witrino/buisness/modules/sell/views/index.vue"),
    children: [
      {
        path: "list",
        name: "sell-list-page",
        component: () =>
          import("@applets/witrino/buisness/modules/sell/views/List.vue"),
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
