export default [
  {
    path: "sell",
    name: "sell",
    redirect: "sell/list",
    component: () => import("@applets/admin/modules/sell/views/index.vue"),
    children: [
      {
        path: "list",
        name: "sell-list-page",
        component: () =>
          import("@applets/admin/modules/sell/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "فروش",
              to: "/admin/sell/list",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
