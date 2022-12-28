export default [
  {
    path: "financial",
    name: "admin-financial",
    redirect: "financial/list",
    component: () =>
      import("@applets/witrino/admin/modules/Financial/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "امور مالی",
          to: "/admin/financial",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "admin-financial-list-page",
        component: () =>
          import("@applets/witrino/admin/modules/Financial/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست امور مالی",
            },
          ],
        },
      },
    ],
  },
];
