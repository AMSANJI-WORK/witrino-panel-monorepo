export default [
  {
    path: "/admin/role",
    name: "role",
    redirect: "/admin/role/list",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "list",
        name: "role-list-page",
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
              text: "اتحادیه ها",
              to: "/admin/role/list",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
