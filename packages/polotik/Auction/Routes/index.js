import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetAuction } from "@packages/polotik/auction/middlewares";
import offersRoutes from "@packages/polotik/auction/modules/offers/routes";
export default [
  {
    path: "/auction",
    name: "auction-page",
    redirect: "/auction/list",
    component: () => import("@packages/polotik/auction/views/index.vue"),
    children: [
      ...offersRoutes,
      {
        path: "list",
        name: "auction-list-page",
        component: () => import("@packages/polotik/auction/views/List.vue"),
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
        component: () => import("@packages/polotik/auction/views/Preview.vue"),
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
        component: () => import("@packages/polotik/auction/views/Edit.vue"),
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
        path: "create",
        name: "auction-create-page",
        component: () => import("@packages/polotik/auction/views/Create.vue"),
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
