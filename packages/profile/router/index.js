import Cookies from "js-cookie";
export default [
  {
    path: "/profile/:userId",
    name: "profile",
    redirect: "/profile/:userId/preview",
    component: () => import("@shared/modules/Profile/views/index.vue"),
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
        component: () => import("@shared/modules/Profile/views/Preview.vue"),
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
        component: () => import("@shared/modules/Profile/views/Edit.vue"),
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
