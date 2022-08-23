import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetAuction } from "@packages/polotik/Auction/Middlewares";
export default [
  {
    path: "/auction",
    name: "auction-page",
    redirect: "/auction/list",
    component: () => import("@packages/polotik/Auction/Views/Index.vue"),
    children: [
      {
        path: "list",
        name: "auction-list-page",
        component: () => import("@packages/polotik/Auction/Views/List.vue"),
        beforeEnter: paginationMiddleware,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: { path: "/" },
            },
            {
              text: "مزایده ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "auction-preview-page",
        component: () => import("@packages/polotik/Auction/Views/Preview.vue"),
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
              text: "مشاهده مزایده",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "auction-edit-page",
        component: () => import("@packages/polotik/Auction/Views/Edit.vue"),
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
              text: "ویرایش مزایده",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/request",
        name: "auction-request-page",
        component: () => import("@packages/polotik/Auction/Views/Request.vue"),
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
              text: "درخواست ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/outcome",
        name: "auction-follow-page",
        component: () => import("@packages/polotik/Auction/Views/OutCome.vue"),
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
              text: "پیگیری درخواست ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "auction-create-page",
        component: () => import("@packages/polotik/Auction/Views/Create.vue"),
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
              text: "ایجاد مزایده",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
