import { resetTender } from "@packages/polotik/tender/middlewares";
import offersRoutes from "@packages/polotik/tender/modules/offers/routes";
export default [
  {
    path: "/tender",
    name: "tender-page",
    redirect: "/tender/list",
    component: () => import("@packages/polotik/tender/views/index.vue"),
    children: [
      ...offersRoutes,
      {
        path: "list",
        name: "tender-list-page",
        component: () => import("@packages/polotik/tender/views/List.vue"),
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
        component: () => import("@packages/polotik/tender/views/Preview.vue"),
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
        component: () => import("@packages/polotik/tender/views/Edit.vue"),
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
        path: "create",
        name: "tender-create-page",
        component: () => import("@packages/polotik/tender/views/Create.vue"),
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
