import { resetInquriry } from "@packages/polotik/inquiry/middlewares";
const inquiryRoutes = {
  path: "/inquiry",
  name: "inquiry-page",
  redirect: "/inquiry/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [
      {
        text: "خانه",
        to: "/",
      },
      {
        text: "استعلام ها",
        to: "/inquiry",
      },
    ],
  },
  children: [
    {
      path: "list",
      name: "inquiry-list-page",
      component: () => import("@packages/polotik/inquiry/views/List.vue"),
      meta: {
        breadCrumb: [
          {
            text: "لیست آگهی ها",
            to: "/inquiry/list",
          },
        ],
      },
    },
    {
      path: ":id/preview",
      name: "inquiry-preview-page",
      component: () => import("@packages/polotik/inquiry/views/Preview.vue"),
      beforeEnter: resetInquriry,
      meta: {
        breadCrumb: [
          {
            text: "مشاهده استعلام",
          },
        ],
      },
    },
    {
      path: ":id/edit",
      name: "inquiry-edit-page",
      component: () => import("@packages/polotik/inquiry/views/Edit.vue"),
      beforeEnter: resetInquriry,
      meta: {
        breadCrumb: [
          {
            text: "ویرایش استعلام",
          },
        ],
      },
    },
    {
      path: ":id/request",
      name: "inquiry-request-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetInquriry,
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
      name: "inquiry-follow-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetInquriry,
      meta: {
        breadCrumb: [
          {
            text: "پیگیری پیشنهاد من",
          },
        ],
      },
    },
    {
      path: "create",
      name: "inquiry-create-page",
      component: () => import("@packages/polotik/inquiry/views/Create.vue"),
      beforeEnter: resetInquriry,
      meta: {
        breadCrumb: [
          {
            text: "ایجاد استعلام",
          },
        ],
      },
    },
  ],
};
export default (router) => {
  router.addRoute(inquiryRoutes);
};
