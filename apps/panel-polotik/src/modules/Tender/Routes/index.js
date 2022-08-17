import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetTender } from "@polotik/modules/Tender/Middlewares";
export default [
  {
    path: "/tender",
    name: "tender-page",
    redirect: "/tender/list",
    component: () => import("@polotik/modules/Tender/Views/Index.vue"),
    beforeEnter: paginationMiddleware,
    children: [
      {
        path: "list",
        name: "tender-list-page",
        component: () => import("@polotik/modules/Tender/Views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: { path: "/" },
            },
            {
              text: "مناقصه ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "tender-preview-page",
        component: () => import("@polotik/modules/Tender/Views/Preview.vue"),
        beforeEnter: resetTender,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "مناقصه",
              to: "/tender",
            },
            {
              text: "مشاهده مناقصه",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "tender-edit-page",
        component: () => import("@polotik/modules/Tender/Views/Edit.vue"),
        beforeEnter: resetTender,

        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "مناقصه",
              to: "/tender",
            },
            {
              text: "ویرایش مناقصه",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/request",
        name: "tender-request-page",
        component: () => import("@polotik/modules/Tender/Views/Request.vue"),
        beforeEnter: resetTender,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "مناقصه",
              to: "/tender",
            },
            {
              text: "درخواست ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "tender-create-page",
        component: () => import("@polotik/modules/Tender/Views/Create.vue"),
        beforeEnter: resetTender,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "مناقصه",
              to: "/tender",
            },
            {
              text: "ایجاد مناقصه",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
