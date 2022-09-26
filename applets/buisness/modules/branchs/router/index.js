export default [
  {
    path: "branch",
    name: "branch",
    redirect: "branch/list",
    meta: {
      breadCrumb: [
        {
          text: "نمایندگی ها",
          to: "/buisness/branch",
        },
      ],
    },
    component: () =>
      import("@applets/buisness/modules/branchs/views/index.vue"),
    children: [
      {
        path: "list",
        name: "branch-list-page",
        component: () =>
          import("@applets/buisness/modules/branchs/views/List.vue"),
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
        name: "branch-detail-page",
        component: () =>
          import("@applets/buisness/modules/branchs/views/Preview.vue"),
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
