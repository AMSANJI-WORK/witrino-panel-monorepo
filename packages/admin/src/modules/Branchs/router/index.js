export default [
  {
    path: "/admin/branch",
    name: "admin-branch",
    redirect: "/admin/branch/list",
    component: () => import("@admin/modules/Branchs/views/index.vue"),
    children: [
      {
        path: "list",
        name: "admin-branch-list-page",
        component: () => import("@admin/modules/Branchs/views/List.vue"),
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
              text: "نمایندگی ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "admin-branch-detail-page",
        component: () => import("@admin/modules/Branchs/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/admin",
            },
            {
              text: "ادمین",
              to: "/home",
            },
            {
              text: "نمایندگی ها",
              to: "/admin/branch/list",
            },
            {
              text: "جزئیات نماینده",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
