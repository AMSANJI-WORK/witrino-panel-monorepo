import { resetInquriry } from "@packages/polotik/inquiry/middlewares";
export default [
  {
    path: ":id/request",
    name: "inquiry-request-page",
    component: () =>
      import("@packages/polotik/inquiry/modules/offers/views/Request.vue"),
    beforeEnter: resetInquriry,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "استعلام",
          to: "/inquiry",
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
    name: "inquiry-follow-page",
    component: () =>
      import("@packages/polotik/inquiry/modules/offers/views/OutCome.vue"),
    beforeEnter: resetInquriry,
    meta: {
      breadCrumb: [
        {
          text: "خانه",
          to: "/home",
        },
        {
          text: "استعلام",
          to: "/inquiry",
        },
        {
          text: "پیگیری پیشنهاد من",
          disabled: true,
        },
      ],
    },
  },
];
