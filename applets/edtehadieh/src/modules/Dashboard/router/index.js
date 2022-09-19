export default [
  {
    path: "home",
    name: "edtehadieh-home",
    component: () =>
      import("@applets/edtehadieh/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
