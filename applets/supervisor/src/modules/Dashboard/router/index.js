export default [
  {
    path: "home",
    name: "supervisor-home",
    component: () =>
      import("@applets/supervisor/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "سوپروایزر",
          to: "/supervisor",
        },
      ],
    },
  },
];
