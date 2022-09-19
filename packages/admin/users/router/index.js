export default [
  {
    path: "user",
    name: "user",
    redirect: "user/list",
    meta: {
      breadCrumb: [
        {
          text: "کاربران",
          to: "/admin/user",
          disabled: true,
        },
      ],
    },
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "list",
        name: "user-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست کاربران",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "user-edit-page",
        component: () => import("../views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش کاربر",
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "user-preview-page",
        component: () => import("../views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "جزئیات کاربر",
            },
          ],
        },
      },
      {
        path: "create",
        name: "user-create-page",
        component: () => import("../views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن کاربر",
            },
          ],
        },
      },
    ],
  },
];
