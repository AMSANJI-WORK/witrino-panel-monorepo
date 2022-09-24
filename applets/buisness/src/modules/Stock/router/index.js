export default [
  {
    path: "stock",
    name: "stock",
    redirect: "stock/supply",
    meta: {
      breadCrumb: [
        {
          text: "انبار",
          to: "/business/stock",
        },
      ],
    },
    component: () =>
      import("@applets/business/src/modules/Stock/views/index.vue"),
    children: [
      {
        path: "inventory",
        name: "stock-inventory-page",
        component: () =>
          import("@applets/business/src/modules/Stock/views/Inventory.vue"),
        meta: {
          breadCrumb: [
            {
              text: "موجودی انبار",
              to: "/business/stock/inventory",
            },
          ],
        },
      },
      {
        path: "supply",
        name: "stock-supply-page",
        component: () =>
          import("@applets/business/src/modules/Stock/views/Supply.vue"),
        meta: {
          breadCrumb: [
            {
              text: "انبارداری",
              to: "/business/stock/supply",
            },
          ],
        },
      },
      {
        path: "input-output-product",
        name: "stock-input-output-product-page",
        component: () =>
          import("@applets/business/src/modules/Stock/views/InOutProduct.vue"),
        meta: {
          breadCrumb: [
            {
              text: "محصول ورودی و خروجی",
            },
          ],
        },
      },
    ],
  },
];
