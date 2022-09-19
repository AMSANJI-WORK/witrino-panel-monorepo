export default [
  {
    path: "home",
    name: "home",
    component: () =>
      import("@applets/namayande/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
