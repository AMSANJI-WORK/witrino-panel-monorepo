export default [
  {
    path: "/admin/theme",
    name: "theme",
    redirect: "/admin/theme/list",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "list",
        name: "theme-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/admin",
            },
            {
              text: "ادمین",
              to: "/admin/home",
            },
            {
              text: "تم ها",
              to: "/admin/theme/list",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
