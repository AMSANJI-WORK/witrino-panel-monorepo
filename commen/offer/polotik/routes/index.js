import { resetAuction } from "@packages/polotik/auction/middlewares";
export default [
  {
    path: ":id/offers",
    name: "offers-page",
    component: () => import("@commen/offer/polotik/views/Offer.vue"),
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
    children: [
      {
        path: "you",
        name: "offer-page-you",
        component: () => import("@commen/offer/polotik/views/Offer.vue"),
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
    ],
  },
];
