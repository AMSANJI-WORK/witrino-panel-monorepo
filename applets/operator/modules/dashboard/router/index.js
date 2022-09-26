export default [
  {
    path: "home",
    name: "operator-home",
    component: () =>
      import("@applets/operator/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
