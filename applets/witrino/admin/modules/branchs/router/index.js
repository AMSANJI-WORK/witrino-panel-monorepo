export default [
  {
    path: "branch",
    name: "admin-branch",
    redirect: "branch/list",
    component: () =>
      import("@applets/witrino/admin/modules/branchs/views/index.vue"),
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
          import("@applets/witrino/admin/modules/branchs/views/List.vue"),
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
          import("@applets/witrino/admin/modules/branchs/views/Preview.vue"),
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
