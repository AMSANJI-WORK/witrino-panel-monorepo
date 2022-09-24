export default [
  {
    path: "plan",
    name: "plan",
    redirect: "plan/list",
    component: () => import("../views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "پلن ها",
          to: "/admin/plan",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "plan-list-page",
        component: () => import("../views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست پلن ها",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "plan-edit-page",
        component: () => import("../views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش پلن",
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "plan-preview-page",
        component: () => import("../views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "جزئیات پلن",
            },
          ],
        },
      },
      {
        path: "create",
        name: "plan-create-page",
        component: () => import("../views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن پلن",
            },
          ],
        },
      },
    ],
  },
];
