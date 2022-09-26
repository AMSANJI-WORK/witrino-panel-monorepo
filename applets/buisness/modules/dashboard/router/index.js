export default [
  {
    path: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      breadCrumb: [],
    },
  },
];
