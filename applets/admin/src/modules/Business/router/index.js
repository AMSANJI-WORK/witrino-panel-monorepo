export default [
  {
    path: "business",
    name: "business",
    redirect: "business/list",
    component: () =>
      import("@applets/admin/src/modules/Business/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          to: "/admin/business",
          text: "کسب و کار ها",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "business-list-page",
        component: () =>
          import("@applets/admin/src/modules/Business/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست کسب و کار ها",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "business-edit-page",
        component: () =>
          import("@applets/admin/src/modules/Business/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش کسب و کار",
            },
          ],
        },
      },
      {
        path: "create",
        name: "business-create-page",
        component: () =>
          import("@applets/admin/src/modules/Business/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن کسب و کار ",
            },
          ],
        },
      },
    ],
  },
];
