export default [
  {
    path: "/admin/home",
    name: "admin-home",
    component: () => import("@applets/admin/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/admin",
        },
        {
          text: "ادمین",
          to: "/admin/home",
        },
      ],
    },
  },
];
