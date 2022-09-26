export default [
  {
    path: "union",
    name: "union",
    redirect: "union/list",
    component: () =>
      import("@applets/admin/modules/unions/views/index.vue"),
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
          import("@applets/admin/modules/unions/views/List.vue"),
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
          import("@applets/admin/modules/unions/views/Edit.vue"),
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
          import("@applets/admin/modules/unions/views/Create.vue"),
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
