export default [
  {
    path: "home",
    component: () => import("@applets/witrino/user/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
