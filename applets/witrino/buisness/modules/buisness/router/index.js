export default [
  {
    path: "buisness",
    name: "buisness",
    redirect: "buisness/list",
    meta: {
      breadCrumb: [
        {
          text: "کسب‌وکار ها",
          to: "/buisness/buisness",
        },
      ],
    },
    component: () =>
      import("@applets/witrino/buisness/modules/buisness/views/index.vue"),
    children: [
      {
        path: "list",
        component: () =>
          import("@applets/witrino/buisness/modules/buisness/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست کسب‌وکار ها",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        component: () =>
          import("@applets/witrino/buisness/modules/buisness/views/Preview.vue"),
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
