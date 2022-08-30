export default [
  {
    path: "/supervisor/home",
    name: "supervisor-home",
    component: () => import("@applets/supervisor/src/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/supervisor",
        },
        {
          text: "سوپر وایزر",
          to: "/supervisor/home",
        },
      ],
    },
  },
];
