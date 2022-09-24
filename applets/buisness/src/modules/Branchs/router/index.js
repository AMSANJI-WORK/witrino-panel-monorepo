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
      import("@applets/buisness/src/modules/Branchs/views/index.vue"),
    children: [
      {
        path: "list",
        name: "branch-list-page",
        component: () =>
          import("@applets/buisness/src/modules/Branchs/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست نمایندگی ها",
              to: "/buisness/branch/list",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "branch-detail-page",
        component: () =>
          import("@applets/buisness/src/modules/Branchs/views/Preview.vue"),
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
