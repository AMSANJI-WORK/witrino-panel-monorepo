import { resetBarter } from "@packages/polotik/barter/middlewares";
export default [
  {
    path: ":id/request",
    name: "barter-request-page",
    component: () =>
      import("@packages/polotik/barter/modules/offers/views/Request.vue"),
    beforeEnter: resetBarter,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "تهاتر",
          to: "/barter",
        },
        {
          text: "درخواست ها",
          disabled: true,
        },
      ],
    },
  },
  {
    path: ":id/outcome",
    name: "barter-follow-page",
    component: () =>
      import("@packages/polotik/barter/modules/offers/views/OutCome.vue"),
    beforeEnter: resetBarter,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "تهاتر",
          to: "/barter",
        },
        {
          text: "پیگیری درخواست ها",
          disabled: true,
        },
      ],
    },
  },
];
