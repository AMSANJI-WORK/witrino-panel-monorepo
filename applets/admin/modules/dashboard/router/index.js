export default [
  {
    path: "home",
    name: "admin-home",
    component: () =>
      import("@applets/admin/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
