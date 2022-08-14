export default [
  {
    path: "/admin/home",
    name: "admin-home",
    component: () => import("@admin/modules/Dashboard/views/Home.vue"),
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
