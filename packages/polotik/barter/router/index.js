import { resetBarter } from "@packages/polotik/barter/middlewares";
const barterRoutes = {
  path: "/barter",
  name: "barter-page",
  redirect: "/barter/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [
      {
        text: "خانه",
        to: "/",
      },
      {
        text: "تهاتر",
        to: "/barter",
      },
    ],
  },
  children: [
    {
      path: ":id/request",
      name: "barter-request-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetBarter,
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
      name: "barter-follow-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetBarter,
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
      name: "barter-list-page",
      component: () => import("@packages/polotik/barter/views/List.vue"),
      meta: {
        breadCrumb: [
          {
            text: "لیست آگهی ها",
            to: "/barter/list",
          },
        ],
      },
    },
    {
      path: ":id/preview",
      name: "barter-preview-page",
      component: () => import("@packages/polotik/barter/views/Preview.vue"),
      beforeEnter: resetBarter,
      meta: {
        breadCrumb: [
          {
            text: "مشاهده تهاتر",
          },
        ],
      },
    },
    {
      path: ":id/edit",
      name: "barter-edit-page",
      component: () => import("@packages/polotik/barter/views/Edit.vue"),
      beforeEnter: resetBarter,
      meta: {
        breadCrumb: [
          {
            text: "ویرایش تهاتر",
            disabled: true,
          },
        ],
      },
    },
    {
      path: "create",
      name: "barter-create-page",
      component: () => import("@packages/polotik/barter/views/Create.vue"),
      beforeEnter: resetBarter,
      meta: {
        breadCrumb: [
          {
            text: "ایجاد تهاتر",
            disabled: true,
          },
        ],
      },
    },
  ],
};

export default (router) => {
  router.addRoute(barterRoutes);
};
