export default [
  {
    path: "home",
    name: "syndicate-home",
    component: () =>
      import("@applets/witrino/syndicate/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
