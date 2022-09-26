export default [
  {
    path: "home",
    component: () => import("@applets/user/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
