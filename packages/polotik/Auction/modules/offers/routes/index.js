import { resetAuction } from "@packages/polotik/auction/middlewares";
export default [
  {
    path: ":id/request",
    name: "auction-request-page",
    component: () =>
      import("@packages/polotik/auction/modules/offers/views/Request.vue"),
    beforeEnter: resetAuction,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "مزایده",
          to: "/auction",
        },
        {
          text: "پیشنهادات",
          disabled: true,
        },
      ],
    },
  },
  {
    path: ":id/outcome",
    name: "auction-follow-page",
    component: () =>
      import("@packages/polotik/auction/modules/offers/views/OutCome.vue"),
    beforeEnter: resetAuction,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "مزایده",
          to: "/auction",
        },
        {
          text: "پیگیری پیشنهاد من",
          disabled: true,
        },
      ],
    },
  },
];
