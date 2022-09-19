export default [
  {
    path: "branch",
    name: "admin-branch",
    redirect: "branch/list",
    component: () =>
      import("@applets/admin/src/modules/Branchs/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "نمایندگی ها",
          to: "/admin/branch",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "admin-branch-list-page",
        component: () =>
          import("@applets/admin/src/modules/Branchs/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست نمایندگی ها",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "admin-branch-detail-page",
        component: () =>
          import("@applets/admin/src/modules/Branchs/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "جزئیات نماینده",
            },
          ],
        },
      },
    ],
  },
];
