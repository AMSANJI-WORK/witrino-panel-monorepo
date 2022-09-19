export default [
  {
    path: "home",
    name: "operator-home",
    component: () =>
      import("@applets/operator/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
