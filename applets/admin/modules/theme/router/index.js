export default [
  {
    path: "theme",
    name: "theme",
    redirect: "theme/list",
    component: () => import("../views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "تم ها",
          to: "theme",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "theme-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست آگهی",
            },
          ],
        },
      },
    ],
  },
];
