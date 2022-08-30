export default [
  {
    path: "/operator/home",
    name: "operator-home",
    component: () => import("@applets/operator/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/operator",
        },
        {
          text: "اپراتور",
          to: "/operator/home",
        },
      ],
    },
  },
];
