import { resetSale } from "@applets/polotik/sale/middlewares";
export default [
  {
    path: ":id/request",
    name: "sale-request-page",
    component: () => import("@applets/polotik/sale/modules/offers/views/Request.vue"),
    beforeEnter: resetSale,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "حراجی",
          to: "/sale",
        },
        {
          text: "پیشنهادات",
          disabled: true,
        },
      ],
    },
  },
];
