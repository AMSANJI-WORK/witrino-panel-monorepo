export default [
  {
    path: "home",
    name: "supervisor-home",
    component: () =>
      import("@applets/supervisor/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
