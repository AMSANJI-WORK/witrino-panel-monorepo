export default [
  {
    path: "financial",
    name: "syndicate-financial",
    component: () =>
      import("@applets/witrino/syndicate/modules/financial/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "امورمالی",
          to: "/syndicate/financial",
        },
      ],
    },
  },
];
