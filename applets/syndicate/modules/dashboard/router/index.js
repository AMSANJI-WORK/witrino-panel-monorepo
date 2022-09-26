export default [
  {
    path: "home",
    name: "syndicate-home",
    component: () =>
      import("@applets/syndicate/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
