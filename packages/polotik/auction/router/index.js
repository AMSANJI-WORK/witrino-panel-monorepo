import { resetAuction } from "@packages/polotik/auction/middlewares";
const auctionRoutes = {
  path: "/auction",
  name: "auction-page",
  redirect: "/auction/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [
      {
        text: "خانه",
        to: "/",
      },
      {
        text: "مزایده ها",
        to: "/auction",
      },
    ],
  },
  children: [
    {
      path: ":id/request",
      name: "auction-request-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetAuction,
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
      name: "auction-follow-page",
      component: () => import("@commen/offer/polotik/views/Offer.vue"),
      beforeEnter: resetAuction,
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
      name: "auction-list-page",
      component: () => import("@packages/polotik/auction/views/List.vue"),
      meta: {
        breadCrumb: [
          {
            text: "لیست آگهی ها",
            to: "/auction/list",
          },
        ],
      },
    },
    {
      path: ":id/preview",
      name: "auction-preview-page",
      component: () => import("@packages/polotik/auction/views/Preview.vue"),
      beforeEnter: resetAuction,
      meta: {
        breadCrumb: [
          {
            text: "مشاهده مزایده",
          },
        ],
      },
    },
    {
      path: ":id/edit",
      name: "auction-edit-page",
      component: () => import("@packages/polotik/auction/views/Edit.vue"),
      beforeEnter: resetAuction,
      meta: {
        breadCrumb: [
          {
            text: "ویرایش مزایده",
          },
        ],
      },
    },
    {
      path: "create",
      name: "auction-create-page",
      component: () => import("@packages/polotik/auction/views/Create.vue"),
      beforeEnter: resetAuction,
      meta: {
        breadCrumb: [
          {
            text: "ایجاد مزایده",
          },
        ],
      },
    },
  ],
};
export default (router) => {
  router.addRoute(auctionRoutes);
};
