import { resetTender } from "@applets/polotik/tender/middlewares";
const tenderRoutes = {
  path: "/tender",
  name: "tender-page",
  redirect: "/tender/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [
      {
        text: "خانه",
        to: "/home",
      },
      {
        text: "مناقصه ها",
        to: "/tender",
      },
    ],
  },
  children: [
    {
      path: ":id/request",
      name: "tender-request-page",
      component: () => import("@applets/polotik/commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetTender,
      meta: {
        breadCrumb: [
          {
            text: "پیشنهادات",
          },
        ],
      },
    },
    {
      path: ":id/outcome",
      name: "tender-follow-page",
      component: () => import("@applets/polotik/commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetTender,
      meta: {
        breadCrumb: [
          {
            text: "پیگیری پیشنهاد من",
          },
        ],
      },
    },
    {
      path: "list",
      name: "tender-list-page",
      component: () => import("@applets/polotik/tender/views/List.vue"),
      meta: {
        breadCrumb: [
          {
            text: "لیست آگهی ها",
            to: "/tender/list",
          },
        ],
      },
    },
    {
      path: ":id/preview",
      name: "tender-preview-page",
      component: () => import("@applets/polotik/tender/views/Preview.vue"),
      beforeEnter: resetTender,
      meta: {
        breadCrumb: [
          {
            text: "مشاهده مناقصه",
          },
        ],
      },
    },
    {
      path: ":id/edit",
      name: "tender-edit-page",
      component: () => import("@applets/polotik/tender/views/Edit.vue"),
      beforeEnter: resetTender,
      meta: {
        breadCrumb: [
          {
            text: "ویرایش مناقصه",
          },
        ],
      },
    },
    {
      path: "create",
      name: "tender-create-page",
      component: () => import("@applets/polotik/tender/views/Create.vue"),
      beforeEnter: resetTender,
      meta: {
        breadCrumb: [
          {
            text: "ایجاد مناقصه",
          },
        ],
      },
    },
  ],
};
export default (router) => {
  router.addRoute(tenderRoutes);
};
