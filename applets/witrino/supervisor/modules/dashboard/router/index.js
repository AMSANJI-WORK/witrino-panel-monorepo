export default [
  {
    path: "home",
    name: "supervisor-home",
    component: () =>
      import("@applets/witrino/supervisor/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
