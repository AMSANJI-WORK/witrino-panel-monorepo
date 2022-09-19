export default [
  {
    path: "service",
    name: "service",
    redirect: "service/list",
    component: () => import("../views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "سرویس ها",
          to: "admin/service",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "service-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست سرویس ها",
              to: "service/list",
            },
          ],
        },
      },
    ],
  },
];
