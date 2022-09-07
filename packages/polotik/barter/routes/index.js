import { resetBarter } from "@packages/polotik/barter/middlewares";
import offersRoutes from "@packages/polotik/barter/modules/offers/routes";
export default [
  {
    path: "/barter",
    name: "barter-page",
    redirect: "/barter/list",
    component: () => import("@packages/polotik/barter/views/index.vue"),
    children: [
      ...offersRoutes,
      {
        path: "list",
        name: "barter-list-page",
        component: () => import("@packages/polotik/barter/views/List.vue"),
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
        component: () => import("@packages/polotik/barter/views/Preview.vue"),
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
        component: () => import("@packages/polotik/barter/views/Edit.vue"),
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
        path: "create",
        name: "barter-create-page",
        component: () => import("@packages/polotik/barter/views/Create.vue"),
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
