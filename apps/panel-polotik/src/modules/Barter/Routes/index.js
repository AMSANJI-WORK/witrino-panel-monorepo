import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetBarter } from "@polotik/modules/Barter/Middlewares";
export default [
  {
    path: "/barter",
    name: "barter-page",
    redirect: "/barter/list",
    component: () => import("@polotik/modules/Barter/Views/Index.vue"),
    children: [
      {
        path: "list",
        name: "barter-list-page",
        component: () => import("@polotik/modules/Barter/Views/List.vue"),
        beforeEnter: paginationMiddleware,
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
        component: () => import("@polotik/modules/Barter/Views/Preview.vue"),
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
        component: () => import("@polotik/modules/Barter/Views/Edit.vue"),
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
        path: ":id/request",
        name: "barter-request-page",
        component: () => import("@polotik/modules/Barter/Views/Request.vue"),
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
              text: "درخواست ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "barter-create-page",
        component: () => import("@polotik/modules/Barter/Views/Create.vue"),
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
  },
];
