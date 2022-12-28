export default [
  {
    path: "home",
    name: "inspector-home",
    component: () =>
      import("@applets/witrino/inspector/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
