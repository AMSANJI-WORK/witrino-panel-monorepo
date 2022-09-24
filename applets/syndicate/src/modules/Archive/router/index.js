export default [
  {
    path: "/syndicate/archive",
    name: "archive",
    redirect: "/syndicate/archive/list",
    component: () => import("@applets/syndicate/src/modules/Archive/views/index.vue"),
    children: [
      {
        path: "list",
        name: "archive-list-page",
        component: () => import("@applets/syndicate/src/modules/Archive/views/List.vue"),
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
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "archive-detail-page",
        component: () => import("@applets/syndicate/src/modules/Archive/views/Preview.vue"),
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
        component: () => import("@applets/syndicate/src/modules/Archive/views/Edit.vue"),
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
        component: () => import("@applets/syndicate/src/modules/Archive/views/Create.vue"),
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
