import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetSale } from "@packages/polotik/Sale/Middlewares";
export default [
  {
    path: "/sale",
    name: "sale-page",
    redirect: "/sale/list",
    component: () => import("@packages/polotik/Sale/Views/Index.vue"),
    children: [
      {
        path: "list",
        name: "sale-list-page",
        component: () => import("@packages/polotik/Sale/Views/List.vue"),
        beforeEnter: paginationMiddleware,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: { path: "/" },
            },
            {
              text: "حراجی ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "sale-preview-page",
        component: () => import("@packages/polotik/Sale/Views/Preview.vue"),
        beforeEnter: resetSale,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "حراجی",
              to: "/sale",
            },
            {
              text: "مشاهده حراجی",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "sale-edit-page",
        component: () => import("@packages/polotik/Sale/Views/Edit.vue"),
        beforeEnter: resetSale,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "حراجی",
              to: "/sale",
            },
            {
              text: "ویرایش حراجی",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/request",
        name: "sale-request-page",
        component: () => import("@packages/polotik/Sale/Views/Request.vue"),
        beforeEnter: resetSale,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "حراجی",
              to: "/sale",
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
        name: "sale-create-page",
        component: () => import("@packages/polotik/Sale/Views/Create.vue"),
        beforeEnter: resetSale,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "حراجی",
              to: "/sale",
            },
            {
              text: "ایجاد حراجی",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
