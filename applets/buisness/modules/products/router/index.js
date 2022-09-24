export default [
  {
    path: "product",
    name: "product",
    redirect: "product/list",
    component: () =>
      import("@applets/business/src/modules/Products/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "محصولات",
          to: "/business/product",
        },
      ],
    },
    children: [
      {
        path: "list",
        name: "product-list-page",
        component: () =>
          import("@applets/business/src/modules/Products/views/List.vue"),
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
        name: "product-edit-page",
        component: () =>
          import("@applets/business/src/modules/Products/views/Edit.vue"),
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
        name: "product-create-page",
        component: () =>
          import("@applets/business/src/modules/Products/views/Create.vue"),
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
