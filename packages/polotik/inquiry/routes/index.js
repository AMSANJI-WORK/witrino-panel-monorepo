import { resetInquriry } from "@packages/polotik/inquiry/middlewares";
export default [
  {
    path: "/inquiry",
    name: "inquiry-page",
    redirect: "/inquiry/list",
    component: () => import("@packages/polotik/inquiry/views/index.vue"),
    children: [
      {
        path: "list",
        name: "inquiry-list-page",
        component: () => import("@packages/polotik/inquiry/views/List.vue"),
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
        component: () => import("@packages/polotik/inquiry/views/Preview.vue"),
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
        component: () => import("@packages/polotik/inquiry/views/Edit.vue"),
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
        component: () => import("@commen/offer/polotik/views/Offer.vue"),
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
              text: "پیشنهادات",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/outcome",
        name: "inquiry-follow-page",
        component: () => import("@commen/offer/polotik/views/Offer.vue"),
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
              text: "پیگیری پیشنهاد من",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "inquiry-create-page",
        component: () => import("@packages/polotik/inquiry/views/Create.vue"),
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
