export default [
  {
    path: "stock",
    name: "stock",
    redirect: "stock/supply",
    meta: {
      breadCrumb: [
        {
          text: "انبار",
          to: "/namayande/stock",
        },
      ],
    },
    component: () =>
      import("@applets/namayande/src/modules/Stock/views/index.vue"),
    children: [
      {
        path: "inventory",
        name: "stock-inventory-page",
        component: () =>
          import("@applets/namayande/src/modules/Stock/views/Inventory.vue"),
        meta: {
          breadCrumb: [
            {
              text: "موجودی انبار",
              to: "/namayande/stock/inventory",
            },
          ],
        },
      },
      {
        path: "supply",
        name: "stock-supply-page",
        component: () =>
          import("@applets/namayande/src/modules/Stock/views/Supply.vue"),
        meta: {
          breadCrumb: [
            {
              text: "انبارداری",
              to: "/namayande/stock/supply",
            },
          ],
        },
      },
      {
        path: "input-output-product",
        name: "stock-input-output-product-page",
        component: () =>
          import("@applets/namayande/src/modules/Stock/views/InOutProduct.vue"),
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
