export default [
  {
    path: "financial",
    name: "syndicate-financial",
    component: () =>
      import("@applets/syndicate/src/modules/Financial/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "امورمالی",
          to: "/syndicate/financial",
          disabled: true,
        },
      ],
    },
  },
];
