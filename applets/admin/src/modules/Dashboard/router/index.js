export default [
  {
    path: "home",
    name: "admin-home",
    component: () =>
      import("@applets/admin/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ادمین",
          to: "/admin/home",
        },
      ],
    },
  },
];
