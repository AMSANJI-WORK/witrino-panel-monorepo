import { resetBarter } from "@packages/polotik/barter/middlewares";
const barterRoutes = {
  path: "/barter",
  name: "barter-page",
  redirect: "/barter/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  children: [
    {
      path: ":id/request",
      name: "barter-request-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
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
            text: "پیشنهادات",
            disabled: true,
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
            text: "خانه",
            to: "/home",
          },
          {
            text: "تهاتر",
            to: "/barter",
          },
          {
            text: "پیگیری پیشنهاد من",
            disabled: true,
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
            text: "خانه",
            to: { path: "/" },
          },
          {
            text: "تهاتر ها",
            disabled: true,
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
            text: "خانه",
            to: "/home",
          },
          {
            text: "تهاتر",
            to: "/barter",
          },
          {
            text: "مشاهده تهاتر",
            disabled: true,
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
            text: "خانه",
            to: "/home",
          },
          {
            text: "تهاتر",
            to: "/barter",
          },
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
            text: "خانه",
            to: "/home",
          },
          {
            text: "تهاتر",
            to: "/barter",
          },
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
