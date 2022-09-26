export default [
  {
    path: "home",
    name: "agent-home",
    component: () =>
      import("@applets/agent/src/modules/Dashboard/views/Home.vue"),
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
