import { resetBarter } from "@packages/polotik/barter/middlewares/index";
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
];
