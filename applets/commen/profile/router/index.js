export const ProfileRoutes = [
  {
    path: "profile/:userId",
    redirect: "profile/:userId/preview",
    component: () => import("../views/index.vue"),
    meta: {
      breadCrumb: [],
    },
    children: [
      {
        path: "preview",
        component: () => import("../views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "پروفایل",
            },
          ],
        },
      },
      {
        path: "edit",
        component: () => import("../views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویرایش پروفایل",
            },
          ],
        },
      },
    ],
  },
];
