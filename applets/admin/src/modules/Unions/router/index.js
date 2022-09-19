export default [
  {
    path: "/admin/union",
    name: "union",
    redirect: "/admin/union/list",
    component: () =>
      import("@applets/admin/src/modules/Unions/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "اتحادیه ها",
          to: "/admin/union/list",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "union-list-page",
        component: () =>
          import("@applets/admin/src/modules/Unions/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست اتحادیه ها",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "union-edit-page",
        component: () =>
          import("@applets/admin/src/modules/Unions/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش اتحادیه",
            },
          ],
        },
      },
      {
        path: "create",
        name: "union-create-page",
        component: () =>
          import("@applets/admin/src/modules/Unions/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن اتحادیه",
            },
          ],
        },
      },
    ],
  },
];
