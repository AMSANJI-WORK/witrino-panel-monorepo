export default [
  {
    path: "home",
    component: () => import("@applets/agent/modules/dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ایجنت",
          to: "/agent/home",
        },
      ],
    },
  },
];
