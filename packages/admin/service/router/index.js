export default [
  {
    path: "/admin/service",
    name: "service",
    redirect: "/admin/service/list",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "list",
        name: "service-list-page",
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
              text: "سرویس ها",
              to: "/admin/service/list",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
