import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetSale } from "@polotik/modules/Sale/Middlewares";
export default [
  {
    path: "/sale",
    name: "sale-page",
    redirect: "/sale/list",
    component: () => import("@polotik/modules/Sale/Views/Index.vue"),
    children: [
      {
        path: "list",
        name: "sale-list-page",
        component: () => import("@polotik/modules/Sale/Views/List.vue"),
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
        component: () => import("@polotik/modules/Sale/Views/Preview.vue"),
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
        component: () => import("@polotik/modules/Sale/Views/Edit.vue"),
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
        component: () => import("@polotik/modules/Sale/Views/Request.vue"),
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
        component: () => import("@polotik/modules/Sale/Views/Create.vue"),
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
