import { resetTender } from "@packages/polotik/tender/middlewares";
export default [
  {
    path: ":id/request",
    name: "tender-request-page",
    component: () =>
      import("@packages/polotik/tender/modules/offers/views/Request.vue"),
    beforeEnter: resetTender,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "مناقصه",
          to: "/tender",
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
    name: "tender-follow-page",
    component: () =>
      import("@packages/polotik/tender/modules/offers/views/OutCome.vue"),
    beforeEnter: resetTender,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "مناقصه",
          to: "/tender",
        },
        {
          text: "پیگیری پیشنهادات",
          disabled: true,
        },
      ],
    },
  },
];
