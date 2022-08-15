import Cookies from "js-cookie";
export const ProfileRoutes =  [
  {
    path: "/profile/:userId",
    name: "profile",
    redirect: "/profile/:userId/preview",
    component: () => import("@packages/profile/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "پروفایل",
          to: `/profile/${Cookies.get("userId")}`,
          disabled: true,
        },
      ],
    },
    children: [
      {
        path: "preview",
        name: "profile-preview",
        component: () => import("@packages/profile/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "پروفایل",
              to: `/profile/${Cookies.get("userId")}`,
            },
            {
              text: "مشاهده پروفایل",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "edit",
        name: "profile-edit",
        component: () => import("@packages/profile/views/Edit.vue"),
        meta: {
          breadCrumb: [
            {
              text: "پروفایل",
              to: `/profile/${Cookies.get("userId")}`,
            },
            {
              text: "ویرایش پروفایل",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];
