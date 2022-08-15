export default [
  {
    path: "/edtehadieh/archive",
    name: "archive",
    redirect: "/edtehadieh/archive/list",
    component: () => import("@edtehadieh/modules/Archive/views/index.vue"),
    children: [
      {
        path: "list",
        name: "archive-list-page",
        component: () => import("@edtehadieh/modules/Archive/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "بایگانی ها",
              to: "/edtehadieh/archive/list",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "archive-detail-page",
        component: () => import("@edtehadieh/modules/Archive/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "بایگانی ها",
              to: "/edtehadieh/archive/list",
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
        component: () => import("@edtehadieh/modules/Archive/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "بایگانی ها",
              to: "/edtehadieh/archive/list",
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
        component: () => import("@edtehadieh/modules/Archive/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "بایگانی ها",
              to: "/edtehadieh/archive/list",
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
