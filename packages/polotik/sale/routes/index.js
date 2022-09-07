import { resetSale } from "@packages/polotik/sale/middlewares";
import offersRoute from "@packages/polotik/sale/modules/offers/routes";
export default [
  {
    path: "/sale",
    name: "sale-page",
    redirect: "/sale/list",
    component: () => import("@packages/polotik/sale/views/index.vue"),
    children: [
      ...offersRoute,
      {
        path: "list",
        name: "sale-list-page",
        component: () => import("@packages/polotik/sale/views/List.vue"),
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
        component: () => import("@packages/polotik/sale/views/Preview.vue"),
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
        component: () => import("@packages/polotik/sale/views/Edit.vue"),
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
        path: "create",
        name: "sale-create-page",
        component: () => import("@packages/polotik/sale/views/Create.vue"),
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
