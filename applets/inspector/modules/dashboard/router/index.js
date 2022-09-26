export default [
  {
    path: "home",
    name: "inspector-home",
    component: () =>
      import("@applets/inspector/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
