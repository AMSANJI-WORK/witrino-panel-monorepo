export default [
  {
    path: "product",
    name: "admin-product",
    redirect: "product/list",
    component: () =>
      import("@applets/admin/src/modules/Products/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "محصولات",
          to: "/admin/product",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "admin-product-list-page",
        component: () =>
          import("@applets/admin/src/modules/Products/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست محصولات",
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "admin-product-edit-page",
        component: () =>
          import("@applets/admin/src/modules/Products/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش محصولات",
            },
          ],
        },
      },
      {
        path: "create",
        name: "admin-product-create-page",
        component: () =>
          import("@applets/admin/src/modules/Products/views/Create.vue"),
        meta: {
          breadCrumb: [
            {
              text: "افزودن محصول",
            },
          ],
        },
      },
    ],
  },
];
