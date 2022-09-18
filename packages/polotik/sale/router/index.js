import { resetSale } from "@packages/polotik/sale/middlewares";
const saleRoutes = {
  path: "/sale",
  name: "sale-page",
  redirect: "/sale/list",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [
      {
        text: "خانه",
        to: "/",
      },
      {
        text: "حراجی",
        to: "/sale",
      },
    ],
  },
  children: [
    {
      path: "list",
      name: "sale-list-page",
      component: () => import("@packages/polotik/sale/views/List.vue"),
      meta: {
        breadCrumb: [
          {
            text: "لیست آگهی ها",
            to: "/sale/list",
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
            text: "مشاهده حراجی",
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
            text: "ویرایش حراجی",
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
            text: "ایجاد حراجی",
          },
        ],
      },
    },
  ],
};
export default (router) => {
  router.addRoute(saleRoutes);
};
