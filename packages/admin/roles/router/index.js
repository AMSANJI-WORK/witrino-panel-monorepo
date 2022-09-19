export default [
  {
    path: "role",
    name: "role",
    redirect: "role/list",
    component: () => import("../views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "سطوح دسترسی",
          to: "role/list",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "role-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست سطوح دسترسی",
              to: "list",
            },
          ],
        },
      },
    ],
  },
];
