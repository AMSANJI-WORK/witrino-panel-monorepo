export default [
  {
    path: "/agent/home",
    name: "agent-home",
    component: () => import("@applets/agent/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/agent",
        },
        {
          text: "ایجنت",
          to: "/agent/home",
        },
      ],
    },
  },
];
