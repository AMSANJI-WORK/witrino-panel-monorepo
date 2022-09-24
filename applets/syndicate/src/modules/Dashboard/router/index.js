export default [
  {
    path: "home",
    name: "syndicate-home",
    component: () =>
      import("@applets/syndicate/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
