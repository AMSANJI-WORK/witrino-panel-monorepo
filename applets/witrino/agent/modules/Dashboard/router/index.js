export default [
  {
    path: "home",
    component: () => import("@applets/witrino/agent/modules/dashboard/views/Home.vue"),
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
