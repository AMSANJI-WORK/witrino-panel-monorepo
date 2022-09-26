export default [
  {
    path: "inspector",
    name: "inspector",
    redirect: "inspector/list",
    meta: {
      breadCrumb: [
        {
          text: "بازرس ها",
          to: "/syndicate/inspector/list",
        },
      ],
    },
    component: () =>
      import("@applets/syndicate/modules/inspector/views/index.vue"),
    children: [
      {
        path: "list",
        name: "inspector-list-page",
        component: () =>
          import("@applets/syndicate/modules/inspector/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست بازرس ها",
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "inspector-preview-page",
        component: () =>
          import("@applets/syndicate/modules/inspector/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "مشاهده بازرس",
            },
          ],
        },
      },
    ],
  },
];
