export default [
  {
    path: "/admin/financial",
    name: "admin-financial",
    redirect: "/admin/financial/list",
    component: () => import("@admin/modules/Financial/views/index.vue"),
    children: [
      {
        path: "list",
        name: "admin-financial-list-page",
        component: () => import("@admin/modules/Financial/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/admin",
            },
            {
              text: "ادمین",
              to: "/admin/home",
            },
            {
              text: "امور مالی",
              to: "/admin/financial/list",
              disabled: true,
            },
          ],
        },
        childern: [
          {
            path: ":id/detail",
            name: "admin-financial-detail-page",
            component: () => import("@admin/modules/Financial/views/Detail.vue"),
            meta: {
              breadCrumb: [
                {
                  text: "ویترینو",
                  to: "/admin",
                },
                {
                  text: "ادمین",
                  to: "/admin/home",
                },
                {
                  text: "امور مالی",
                  to: "/admin/financial/list",
                },
                {
                  text: "جزئیات سفارش",
                  disabled: true,
                },
              ],
            },
          },
        ],
      },
      {
        path: "transaction/list",
        name: "admin-financial-transaction-list-page",
        component: () =>
          import("@admin/modules/Financial/views/Transaction/List.vue"),
        children: [
          {
            path: ":id/detail",
            name: "admin-financial-transaction-detail-page",
            component: () =>
              import("@admin/modules/Financial/views/Transaction/Detail.vue"),
            meta: {
              breadCrumb: [
                {
                  text: "ویترینو",
                  to: "/admin",
                },
                {
                  text: "ادمین",
                  to: "/admin/home",
                },
                {
                  text: "امور مالی",
                  to: "/admin/financial/list",
                },
                {
                  text: "تراکنش ها",
                  to: "/admin/financial/transaction/list",
                },
                {
                  text: "جزئیات تراکنش",
                  disabled: true,
                },
              ],
            },
          },
        ],
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/admin",
            },
            {
              text: "ادمین",
              to: "/admin/home",
            },
            {
              text: "امور مالی",
              to: "/admin/financial/list",
            },
            {
              text: "تراکنش ها",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
