export default [
  {
    path: "/namayande/stock",
    name: "stock",
    redirect: "/namayande/stock/supply",
    component: () => import("@applets/namayande/src/modules/Stock/views/index.vue"),
    children: [
      {
        path: "inventory",
        name: "stock-inventory-page",
        component: () => import("@applets/namayande/src/modules/Stock/views/Inventory.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "نماینده",
              to: "/namayande/home",
            },
            {
              text: "انبار",
              to: "/namayande/stock",
            },
            {
              text: "موجودی انبار",
              to: "/namayande/stock/inventory",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "supply",
        name: "stock-supply-page",
        component: () => import("@applets/namayande/src/modules/Stock/views/Supply.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "نماینده",
              to: "/namayande/home",
            },
            {
              text: "انبار",
              to: "/namayande/stock",
            },
            {
              text: "انبارداری",
              to: "/namayande/stock/supply",
              disabled: true,
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
              text: "ویترینو",
              to: "/",
            },
            {
              text: "نماینده",
              to: "/namayande/home",
            },
            {
              text: "انبار داری",
              to: "/namayande/stock",
            },
            {
              text: "محصول ورودی و خروجی",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
