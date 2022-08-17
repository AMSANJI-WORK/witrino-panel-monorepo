import paginationMiddleware from "@polotik/middlewares/pagination";
import { resetInquriry } from "@polotik/modules/Inquiry/Middlewares";
export default [
  {
    path: "/inquiry",
    name: "inquiry-page",
    redirect: "/inquiry/list",
    component: () => import("@polotik/modules/Inquiry/Views/Index.vue"),
    children: [
      {
        path: "list",
        name: "inquiry-list-page",
        component: () => import("@polotik/modules/Inquiry/Views/List.vue"),
        beforeEnter: paginationMiddleware,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: { path: "/" },
            },
            {
              text: "استعلام ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/preview",
        name: "inquiry-preview-page",
        component: () => import("@polotik/modules/Inquiry/Views/Preview.vue"),
        beforeEnter: resetInquriry,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "استعلام",
              to: "/inquiry",
            },
            {
              text: "مشاهده استعلام",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/edit",
        name: "inquiry-edit-page",
        component: () => import("@polotik/modules/Inquiry/Views/Edit.vue"),
        beforeEnter: resetInquriry,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "استعلام",
              to: "/inquiry",
            },
            {
              text: "ویرایش استعلام",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/request",
        name: "inquiry-request-page",
        component: () => import("@polotik/modules/Inquiry/Views/Request.vue"),
        beforeEnter: resetInquriry,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "استعلام",
              to: "/inquiry",
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
        name: "inquiry-create-page",
        component: () => import("@polotik/modules/Inquiry/Views/Create.vue"),
        beforeEnter: resetInquriry,
        meta: {
          breadCrumb: [
            {
              text: "خانه",
              to: "/home",
            },
            {
              text: "استعلام",
              to: "/inquiry",
            },
            {
              text: "ایجاد استعلام",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
