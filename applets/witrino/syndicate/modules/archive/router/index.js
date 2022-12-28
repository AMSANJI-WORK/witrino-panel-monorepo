export default [
  {
    path: "archive",
    name: "archive",
    redirect: "archive/list",
    meta: {
      breadCrumb: [
        {
          text: "بایگانی ها",
          to: "/syndicate/archive",
        },
      ],
    },
    component: () =>
      import("@applets/witrino/syndicate/modules/archive/views/index.vue"),
    children: [
      {
        path: "list",
        name: "archive-list-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/archive/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست بایگانی ها",
              to: "/syndicate/archive/list",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "archive-detail-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/archive/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/syndicate/home",
            },
            {
              text: "بایگانی ها",
              to: "/syndicate/archive/list",
            },
            {
              text: "جزئیات بایگانی",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "archive-edit-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/archive/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/syndicate/home",
            },
            {
              text: "بایگانی ها",
              to: "/syndicate/archive/list",
            },
            {
              text: "ویرایش بایگانی",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "archive-create-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/archive/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/syndicate/home",
            },
            {
              text: "بایگانی ها",
              to: "/syndicate/archive/list",
            },
            {
              text: "جزئیات بایگانی",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
