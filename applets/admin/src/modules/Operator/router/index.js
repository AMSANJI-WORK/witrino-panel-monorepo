export default [
  {
    path: "operator",
    name: "operator",
    redirect: "operator/list",
    component: () =>
      import("@applets/admin/src/modules/Operator/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "اپراتور ها",
          to: "/admin/operator",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "operator-list-page",
        component: () =>
          import("@applets/admin/src/modules/Operator/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست اپراتور ها",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "operator-edit-page",
        component: () =>
          import("@applets/admin/src/modules/Operator/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش اپراتور",
            },
          ],
        },
      },
      {
        path: "create",
        name: "operator-create-page",
        component: () =>
          import("@applets/admin/src/modules/Operator/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن اپراتور ",
            },
          ],
        },
      },
    ],
  },
];
