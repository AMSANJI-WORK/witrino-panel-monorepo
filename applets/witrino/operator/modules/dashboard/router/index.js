export default [
  {
    path: "home",
    name: "operator-home",
    component: () =>
      import("@applets/witrino/operator/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
